import type { RootStateOrAny } from 'react-redux'
import { combineReducers } from "@reduxjs/toolkit";
import _ from 'lodash'
import { AuthTypes } from "./types/AuthTypes"
import { AuthReducer } from "./reducers";
import { Action, ActionTypes } from "./types/ReduxTypes";

export type RootReducerTypes = {
    authReducer: AuthTypes.State
}

const reducers = combineReducers({
    authReducer: AuthReducer,
});

const getCleanedState = (state: RootStateOrAny): RootStateOrAny => {
    const whitelist: any = [];
    return _.pick(state, whitelist)
}

export const RootReducer = (state: RootStateOrAny, action: Action) => {
    if (action.type === ActionTypes.RESET_STORE) {
        let newState
        newState = getCleanedState(state)
        return reducers(newState, action)
    }
    return reducers(state, action)
}