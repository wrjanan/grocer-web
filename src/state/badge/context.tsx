import React, { useContext, useState } from "react";
import { BadgeState } from "./action";
import { BadgesInitialState } from "./reducer";

const BadgeContext = React.createContext<BadgeState>(BadgesInitialState);
const useBadgeContext = ():BadgeState  => useContext(BadgeContext);

export const useBadgeListState = (): BadgeState => {
    const context = React.useContext(BadgeContext);
    if (undefined === context) {
        throw new Error("Please use within BadgeListStateProvider");
    }
    return context;
};

export const BadgeListProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [badgesState, setBadges] = useState(BadgesInitialState);

    // useeffect get badgesstate 
    return (
        <BadgeContext.Provider value={badgesState}>
            {children}
        </BadgeContext.Provider>
    );
};

export default BadgeContext;
export { useBadgeContext }
