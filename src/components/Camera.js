import React from 'react';
import StarRating from 'react-star-ratings'
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Alert } from 'reactstrap';


const Camera = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Camera Name:{props.camera.name}</CardTitle>
          <CardSubtitle style={{color:'red'}}>{props.camera.onSale ? "On SALE" : null}</CardSubtitle>
        </CardBody>
        <img width="50%" src={props.camera.picture} alt="Card image cap" />
        <CardBody>
          <CardText>Price: {props.camera.price}</CardText>
          <CardText>Rating:</CardText>
          <StarRating rating={props.camera.rating}
          numberOfStars={5}
          starRatedColor="red"
          name="Rating"/>

          <Button color="primary"
          onClick={() => props.addToCartFunc(props.camera.id)}
          >ADD TO CART</Button>
        </CardBody>

      </Card>
    </div>
  );
};

export default Camera;
