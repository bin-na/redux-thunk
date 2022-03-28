import { ahuhuConstants } from '../constants';

const alert = (text) => {
  const request = (payload) => {
    return { type: ahuhuConstants.REQUEST_ALERT, payload };
  };

  return (dispatch) => {
    dispatch(request({ text }));
  };
};

const requestData = () => {
  const request = (payload) => {
    return { type: ahuhuConstants.REQUEST_DATA, payload };
  };
  return (dispatch) => {
    if (localStorage.getItem('infor') !== null) {
      const data = JSON.parse(localStorage.getItem('infor'));
      dispatch(request({ data }));
    }
  };
};
export const ahuhuActions = {
  requestData,
};
