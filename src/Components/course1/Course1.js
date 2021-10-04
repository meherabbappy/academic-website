
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Course1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'

const Course1 = (props) => {
    const {name,price,duration,type,img} = props.course;
     

    return (  

        <div>
   <Col className= "cards-home">
      <Card>
        <Card.Img className= 'img-className' variant="top" src={img} />
        <Card.Body>
          <Card.Title><h2 className= "names">Course Name: {name}</h2></Card.Title>
          <Card.Text>
          
          </Card.Text>
          <h4>Course Type: {type}</h4>
         <div className= 'cart-item'>
         <h5 className= 'duration'> <FontAwesomeIcon icon={faStopwatch} /> {duration}</h5>
          <h5 className= 'price'> Price : {price}</h5>
         </div>
          <Button className= "btn-regular">Enroll Now</Button>{' '}
          
        </Card.Body>
      </Card>
    </Col>
        </div> 
    )
};

export default Course1;