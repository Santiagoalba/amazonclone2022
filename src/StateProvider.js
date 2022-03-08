import React, { createContext, useContext, useReducer } from "react";


// DATA LAYER
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// HOW TO USE IN A COMPONENT
export const useStateValue = () => useContext(StateContext);