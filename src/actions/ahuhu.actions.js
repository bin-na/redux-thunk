import { ahuhuConstants } from "../constants";

const alert = (text) => {
  const request = (payload) => {
    return { type: ahuhuConstants.REQUEST_ALERT, payload };
  };

  return (dispatch) => {
    dispatch(request({ text }));
  };
};

export const ahuhuActions = {
  alert,
};
