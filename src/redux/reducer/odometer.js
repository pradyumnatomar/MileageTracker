import {SAVE_ODOMETER_LIST} from '../actionType';

const initialState = {
  odometerList: {},
};

const AbandonedCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ODOMETER_LIST:
      const data = {...state.odometerList};
      if (data[action.data.creationMonth]) {
        data[action.data.creationMonth].push(action.data);
      } else data[action.data.creationMonth] = [action.data];
      return {
        ...state,
        odometerList: data,
      };
    default:
      return state;
  }
};

export default AbandonedCartReducer;
