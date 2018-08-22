import axios from 'axios';

export const FETCH_CAMERA_SUCCESS = "FETCH_CAMERA_SUCCESS";
export const FILTER_CAMERAS = "FILTER_CAMERAS";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILED = "ADD_TO_CART_FAILED";

export const fetchCamera = ()=>{
  return dispatch =>{
    axios.get(`http://localhost:8082/api/cameras`)
      .then(response => dispatch({
        type: FETCH_CAMERA_SUCCESS,
        payload: response.data
      }))
}
}

export const filterCameras = phrase =>{
  console.log(" Phrase ", phrase)
  return dispatch =>{
    dispatch({
      type: FILTER_CAMERAS,
      payload: phrase
    })
  }
}

export const addToCart = (id) =>{
  return dispatch =>{
    axios.patch(`http://localhost:8082/api/cameras/${id}/add`)
      .then(response =>{

        dispatch({
          type: ADD_TO_CART_SUCCESS,
          payload: response.data
        })
      }) .catch(err =>{
        dispatch({
          type: ADD_TO_CART_FAILED,
          payload: err
        })
      })
  }
}
