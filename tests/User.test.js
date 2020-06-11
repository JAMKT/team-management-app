const mongoose = require('mongoose');
const User = require('../models/User');
const { deleteOne } = require('../models/User');

//Creating a dummy data 
const userData = {
    firstName: "Testing",
    lastName: "Testinger",
    username: "testing",
    email: "userTesting@test.com",
    password:"qwe123",
    description: ""};

describe('User Model Test', () => {

    //We use jest-mongoDB Preset for mocking db behavior via 
    //MongoDB Memory Saver. This is a standard configuration for it:
    beforeAll(async () => {
      await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });
    // Clear the collection after each test
    afterEach(async () => {
        await mongoose.connection.collection('users').deleteMany()
      })
    
    // Close the connection after all the tests are done
    afterAll(async () => {
        await mongoose.connection.close();
    })

    // This is the way to write tests once we have a connection to fake db
    it('create & save user successfully', async () => {
        const validUser = new User(userData);
        const savedUser = await validUser.save();
        // Object id should be defined when successfully saved to MongoDB
        expect(savedUser._id).toBeDefined();
        expect(savedUser.firstname).toBe(userData.firstname);
        expect(savedUser.lastname).toBe(userData.lastname);
        expect(savedUser.username).toBe(userData.username);
        expect(savedUser.email).toBe(userData.email);
        expect(savedUser.password).toBe(userData.password);
        expect(savedUser.description).toBe(userData.description);
    });

    //Testing the required fields
    it('creating user without required fields should fail', async () => {
        const userWithoutRequiredField = new User({ email: 'test1@gmail.com', password:"qwe123"});
        let err;
        try {
            const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
            error = savedUserWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.firstName).toBeDefined();
        expect(err.errors.lastName).toBeDefined();
        expect(err.errors.username).toBeDefined();
    })
})