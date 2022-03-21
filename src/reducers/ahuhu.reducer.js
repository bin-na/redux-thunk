import { ahuhuConstants } from "../constants";

export function ahuhu(state = {}, action) {
  switch (action.type) {
    case ahuhuConstants.REQUEST_ALERT:
      return {
        text: `Binh: ${action.payload.text}`,
      };
    default:
      return state;
  }
}
