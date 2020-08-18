import React, { Children } from "react";
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ initalState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);
