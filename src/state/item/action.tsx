import { IItem } from "../../model/item"
import { useItemContext } from "./context"
import { ItemReducer } from "./reducer"


export type ItemState = {
  items: IItem[]
}

export type ItemAction = {
  type: string
  item: IItem
}

export type DispatchType = (args: ItemAction) => ItemAction

const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"
export const ItemActionTypes = { ADD_ITEM, REMOVE_ITEM };

export function addItem(item: IItem) {
  const action: ItemAction = {
    type: ItemActionTypes.ADD_ITEM,
    item,
  }
  console.log(action);
  return simulateHttpRequest(action)
}

export function removeItem(item: IItem) {
  const action: ItemAction = {
    type: ItemActionTypes.REMOVE_ITEM,
    item,
  }
  return simulateHttpRequest(action)
}


export function simulateHttpRequest(action: ItemAction) {
  return (dispatch: DispatchType) => {
    const itemContext = useItemContext();
    console.log("itemContext", itemContext);
    console.log("action", action);
    ItemReducer(itemContext, action);
  }
}
