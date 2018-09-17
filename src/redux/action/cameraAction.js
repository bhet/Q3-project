import axios from 'axios';

export const FETCH_CAMERA_SUCCESS = "FETCH_CAMERA_SUCCESS";
export const FILTER_CAMERAS = "FILTER_CAMERAS";


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
  console.log(" Phrase in action", phrase)
  return dispatch =>{
    dispatch({
      type: FILTER_CAMERAS,
      payload: phrase
    })
  }
}
