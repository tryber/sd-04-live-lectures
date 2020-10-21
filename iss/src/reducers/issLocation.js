import {
  REQUEST_ISS_LOCATION,
  REQUEST_ISS_LOCATION_SUCCESS
} from '../actions';

const INITIAL_ISS_LOCATION_STATE = {
  isFetching: false,
  latitude: null,
  longitude: null
}

const issLocation = (state = INITIAL_ISS_LOCATION_STATE, action) => {
  console.log('received action:', action);
  switch (action.type) {
    case REQUEST_ISS_LOCATION:
      return {
        ...state,
        isFetching: true
      };
    case REQUEST_ISS_LOCATION_SUCCESS:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        isFetching: false
      };
    default:
      return state;
  }
};

export default issLocation;
