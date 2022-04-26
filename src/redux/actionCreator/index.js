import {SAVE_ODOMETER_LIST} from '../actionType';

export function saveOdometerData(data) {
  return {
    type: SAVE_ODOMETER_LIST,
    data,
  };
}
