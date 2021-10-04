import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Services1 from '../Services1/Services1';
import './Services.css'

const Services = (props) => {
    const [services,setServices] = useState([]);
    
    useEffect(() =>{
        fetch('./package.JSON')
        .then(res =>res.json())
        .then(data =>setServices(data));
    },[]);
    return (

        <div>
           <div className="my-5">
           <h1 className= 'divv3-cls'>Our All Courses</h1>
            <div className= "div-clss"></div>
           </div>
            
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                services.map(service => <Services1
                    key = {service.name}
                    service = {service}
                ></Services1>
                
               )
            }
            </Row>

        </div>
    );
};

export default Services;