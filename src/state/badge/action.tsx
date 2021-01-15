import { IBadge } from "../../model/badge"
import { useBadgeContext } from "./context"
import { BadgeReducer } from "./reducer"


export type BadgeState = {
  badges: IBadge[]
}

export type BadgeAction = {
  type: string
  badge: IBadge
}

export type DispatchType = (args: BadgeAction) => BadgeAction

const ADD_BADGE = "ADD_BADGE"
const REMOVE_BADGE = "REMOVE_BADGE"
export const BadgeActionTypes = { ADD_BADGE, REMOVE_BADGE };

export function addBadge(badge: IBadge) {
  const action: BadgeAction = {
    type: BadgeActionTypes.ADD_BADGE,
    badge,
  }
  console.log(action);
  return simulateHttpRequest(action)
}

export function removeBadge(badge: IBadge) {
  const action: BadgeAction = {
    type: BadgeActionTypes.REMOVE_BADGE,
    badge,
  }
  return simulateHttpRequest(action)
}


export function simulateHttpRequest(action: BadgeAction) {
  return (dispatch: DispatchType) => {
    const badgeContext = useBadgeContext();
    console.log("badgeContext", badgeContext);
    console.log("action", action);
    BadgeReducer(badgeContext, action);
  }
}
