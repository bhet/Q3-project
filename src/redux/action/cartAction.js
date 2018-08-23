import axios from "axios";

export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILED = "ADD_TO_CART_FAILED";


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
