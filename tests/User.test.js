const mongoose = require('mongoose');
const User = require('../models/User');

const userData = {
    firstName: "Testing",
    lastName: "Testinger",
    username: "testing",
    email: "userTesting@test.com",
    password:"qwe123"};

describe('User Model Test', () => {
    let connection;

    //We use jest-mongoDB Preset for mocking db behavior using 
    //MongoDB Memory Saver. This is a standard configuration for it

    beforeAll(async () => {
        connection = await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async () => {
        const validUser = new User(userData);
        const savedUser = await validUser.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser._id).toBeDefined();
        expect(savedUser.firstname).toBe(userData.firstname);
        expect(savedUser.lastname).toBe(userData.lastname);
        expect(savedUser.username).toBe(userData.username);
        expect(savedUser.email).toBe(userData.email);
        expect(savedUser.password).toBe(userData.password);
    });

})