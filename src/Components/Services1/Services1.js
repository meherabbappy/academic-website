import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Services1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'

const Services1 = (props) => {
    const {name,price,duration,type,img} = props.service;
    return (

<div>
      <Col className = "card-home">
         <Card>
           <Card.Img className = 'imgg-class' variant="top" src={img} />
           <Card.Body>
             <Card.Title><h4 className = 'names'>Course Name: {name}</h4></Card.Title>
             <Card.Text>
             
             </Card.Text>
             <h5>Course Type: {type}</h5>
            <div className = 'cart1-item'>
            <h5 className = 'duration1'> <FontAwesomeIcon icon={faStopwatch} /> {duration}</h5>
             <h5 className = 'price1'> Price : {price}</h5>
            </div>
             <Button className = "btn1-regular">Enroll Now</Button>{' '}
             
           </Card.Body>
         </Card>
       </Col>
           </div> 

    );
};

export default Services1;