import React from "react";
import { BadgeAction, BadgeActionTypes, BadgeState } from "./action"

export const BadgesInitialState: BadgeState = {
    badges: [
    ],
}

export function BadgeReducer(state: BadgeState, action: BadgeAction): BadgeState {
    switch (action.type) {
        case BadgeActionTypes.ADD_BADGE:
            console.log("janana", state);
            return { badges: [...state.badges, { ...action.badge }] };
        case BadgeActionTypes.REMOVE_BADGE:
            return { badges: [...state.badges, { ...action.badge }] };
        default:
            return { badges: [...state.badges] };
    }
}