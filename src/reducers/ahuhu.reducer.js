import { ahuhuConstants } from '../constants';
const initialState = {
  text: '',
  data: [],
};
export function ahuhu(state = initialState, action) {
  switch (action.type) {
    case ahuhuConstants.REQUEST_ALERT:
      return {
        ...state,
        text: `Binh: ${action.payload.text}`,
      };
    case ahuhuConstants.REQUEST_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
