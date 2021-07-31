import React, { useContext, useState } from "react";
import { ItemState } from "./action";
import { ItemsInitialState } from "./reducer";

const ItemContext = React.createContext<ItemState>(ItemsInitialState);
const useItemContext = ():ItemState  => useContext(ItemContext);

export const useItemListState = (): ItemState => {
    const context = React.useContext(ItemContext);
    if (undefined === context) {
        throw new Error("Please use within ItemListStateProvider");
    }
    return context;
};

export const ItemListProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [itemsState, setItems] = useState(ItemsInitialState);

    return (
        <ItemContext.Provider value={itemsState}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;
export { useItemContext }
