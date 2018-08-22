import { FETCH_CAMERA_SUCCESS,
  FILTER_CAMERAS,
ADD_TO_CART_SUCCESS,
ADD_TO_CART_FAILED } from '../action/action';

let initialState = {
  cameras: [],
  filterPhrase: '',
  cartList: [],
};

export default (state = initialState, action)=>{
  switch(action.type){

    case FETCH_CAMERA_SUCCESS:
    return {
      ...state,
      cameras: [...action.payload]
    }

    case FILTER_CAMERAS:
    console.log(" filterPhrase ", action )
    return {
      ...state,
      filterPhrase: action.payload
    }

    case ADD_TO_CART_SUCCESS:
    let allOtherCameras = state.cameras.filter(camera => camera.id !== action.payload.id)
    console.log(" allOtherCameras", allOtherCameras)
    return {
      ...state,
      cartLIst: [...allOtherCameras, action.payload].sort((a, b) => a.id >b.id)
    }

    default:
    return state
  }
}
