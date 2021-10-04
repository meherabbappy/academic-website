// import Button from '@restart/ui/esm/Button';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Course1 from '../course1/Course1';
import './Home.css'


const Home = () => {
    const [courses,setCourse] = useState([]);
    useEffect(() =>{
        fetch('./package1.JSON')
        .then(res =>res.json())
        .then(data =>setCourse(data));
    },[]);

    return (
        <div>

            <Row className='header-all'>
            <Col  xs={6}>
                <div className="home-description">
                        <h1 className= 'title'>Learn online from the leaders in business education</h1>
                        <p className= 'p-title'>Expand your business skills and engage with a global network of learners through our flexible, online courses. Wherever you are in your career—or the world—Harvard Business School Online can help you achieve your goals.</p>
                        <Button className= 'btn-visit'>Visit Our Courses</Button>
                    </div>    
                </Col>

                <Col  xs={6}>
                <div className="home-image">
                        <img src="https://cdn.pixabay.com/photo/2020/06/02/05/45/online-course-5249512_960_720.jpg" style={{width:"100%"}} alt="" />
                    </div>
                </Col>

               
            </Row>

          



            <div className="my-4">
            <h1 className= 'text-center divv3-cls'>Our Feature Courses</h1>
            <div className= "div-cls"></div>
            </div>
            <Row xs={1} md={2} lg={2} className="g-4">
            {
                courses.map(course => <Course1
                key = {course.name}
                course = {course}
                ></Course1>)
            }
            </Row>
        </div>
    );
};

export default Home;