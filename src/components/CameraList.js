import React from 'react';
import Camera from './Camera';
import { connect } from  'react-redux';
import { addToCart } from '../redux/action/cartAction';
import { bindActionCreators } from 'redux';

const CameraList = (props)=>{
  console.log("Props ", props)

  let cameraList = props.filterPhrase ? props.cameras
    .filter(camera =>camera.name.include(props.filterPhrase))
    .map(camera => <Camera key={camera.id} camera={camera}/>)
  : props.cameras.map(camera =><Camera key={camera.id} camera={camera}
    addToCartFunc={props.addToCart}/>)

  return (
    <div>
      {cameraList}
    </div>
  )
}

const mapStateToProps = state => ({
  cameras: state.cameras.cameras
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CameraList);
