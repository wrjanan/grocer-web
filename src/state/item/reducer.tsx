import React from "react";
import { ItemAction, ItemActionTypes, ItemState } from "./action"

export const ItemsInitialState: ItemState = {
    items: [
    ],
}

export function ItemReducer(state: ItemState, action: ItemAction): ItemState {
    switch (action.type) {
        case ItemActionTypes.ADD_ITEM:
            return { items: [...state.items, { ...action.item }] };
        case ItemActionTypes.REMOVE_ITEM:
            return { items: [...state.items, { ...action.item }] };
        default:
            return { items: [...state.items] };
    }
}