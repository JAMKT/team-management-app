import { createContext } from 'react';

export const AuthContext = createContext({
    loggedIn: null,
    login: () => {},
    logout: () => {},
    currUser: null,
    loadFromRedirect: null
});