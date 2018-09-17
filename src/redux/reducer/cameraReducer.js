import { FETCH_CAMERA_SUCCESS,
  FILTER_CAMERAS
 } from '../action/cameraAction';

let initialState = {
  cameras: [],
  filterPhrase: '',

};

export default (state = initialState, action)=>{
  switch(action.type){

    case FETCH_CAMERA_SUCCESS:
    return {
      ...state,
      cameras: [...action.payload]
    }

    case FILTER_CAMERAS:
    console.log(" filterPhrase in reducer", action )
    return {
      ...state,
      filterPhrase: action.payload
    }

    default:
    return state
  }
}
