import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCertificate, faDollarSign, faGraduationCap, faInfo, faList, faQuestion, faStopwatch } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className ="about-conatiner">


           

        
        <div className ="about-all">
          <div>
              <h1 className ="title-about">More Info</h1>
              <p className = "p-about">Harvard Business School Online offers a unique and highly engaging way to learn vital business concepts. Wherever you are in your career—or the world—we provide educational experiences that can help you achieve your personal and professional goals.</p>
          </div>
        </div>


            {/* ------------------------- */}

            <div className="all-mens">
               

<div>
<div class="pt-3 pb-4">
    <div class="container">
        <div class="row mt-4">
            <div class="col text-center">
                <h1 className='all-titles'>
                    Our Team Members
                </h1>
                <div className="divv1-cls"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 text-center">
                <img class="img-fluid qualities-img p-4 rounded-circle" src="https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-light-styling-min.jpg" alt="" />
                <h5>
                    CEO
                </h5>
                <p>
                    <i>Haesel Gives</i>
                </p>

            </div>
            <div class="col-md-4 text-center">
                <img class="img-fluid qualities-img p-4 rounded-circle" src="https://media.istockphoto.com/photos/african-american-businessman-smiling-on-grey-picture-id1138563417?k=20&m=1138563417&s=612x612&w=0&h=zeW4F-XuCQAka4lGUFxzXoCue4ZjasG1JpUAr1tO8_A=" alt="" />
                <h5>
                    Business Analyst
                </h5>
                <p>
                    <i>Merena Kula</i>
                </p>

            </div>
            <div class="col-md-4 text-center">

                <img class="img-fluid qualities-img p-4 rounded-circle" src="https://static9.depositphotos.com/1325771/1218/i/600/depositphotos_12185281-stock-photo-happy-smart-business-man.jpg" alt="" />
                <h5>
                    Senior HR
                </h5>
                <p>
                    <i>Tom Kari</i>
                </p>
            </div>
        </div>

        <div class="row mb-md-3">
            <div class="col-md-4 text-center">
                <img class="img-fluid qualities-img p-4 rounded-circle" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaZqulYzUa8PZOUOM5fZ4oXDDWvWY5EN7WI1V7PF7RkGilk5g8jhiD--22utKgK2Gcew&usqp=CAU' alt="" />
                <h5>
                   React Developer
                </h5>
                <p>
                    <i>Traya Sami</i>
                </p>
            </div>
            <div class="col-md-4 text-center">
                <img class="img-fluid qualities-img p-4 rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfvSCritAj_5LPu16Y8fqTFotHBRi3ilnfIIaHLeQYmtsur5AL-3Kvy4R85CUv7wiq9g&usqp=CAU" alt="" />
                <h5>
                    Marketing Head
                </h5>
                <p>
                    <i>Metra Moris</i>
                </p>
            </div>
            <div class="col-md-4 text-center">
                <img class="img-fluid qualities-img p-4 rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81kdIkUsAiZKEwy_JaSIQQ-KLOlLOav30tQ&usqp=CAU" alt="" />
                <h5>
                    Software Head
                </h5>
                <p>
                    <i>Charls Rabi</i>
                </p>
            </div>
        </div>
    </div>
</div>
</div>
</div>

            {/* ----------------------------- */}



            <div className = 'about-description'>
            <h2 className="all-titles">How It Works</h2>
            <div className ="divv-cls"></div>
            <div className ='about-child'>
            
                <div className="about-items">
                <FontAwesomeIcon className = "icon-img" icon={faGraduationCap} />
                    <h3 >Learning Experience</h3>
                    <p className = "p-items">
                    Our programs are designed to bring the Harvard Business School classroom to you. Find out how.</p>
                </div>
                <div className="about-items">
                <FontAwesomeIcon className = "icon-img" icon={faCertificate} />
                    <h3>Certificates, Credentials & Credits</h3>
                    <p className = "p-items">
                    We offer multiple ways to learn vital business concepts. Discover which option is best for you.</p>
                </div>
                <div className="about-items">
                <FontAwesomeIcon className = "icon-img" icon={faBook} />
                    <h3>Learning Tracks</h3>
                    <p className = "p-items">
                    Gain deeper insights and expertise with this advanced certificate.</p>
                </div>
            </div>
            </div>


            <div className = 'about-description1'>
            <h2 className="all-titles">NEED HELP?</h2>
            <div className ="divv-cls"></div>
            <div className ='about-child1'>
            
                <div className="about-items">
                <FontAwesomeIcon className = "icon-img" icon={faQuestion} />
                    <h3>Frequently Asked Questions</h3>
                    <p className = "p-items">
                    Get answers to your questions about admissions, grading, and more.</p>
                </div>
                <div className="about-items">
                <FontAwesomeIcon className = "icon-img" icon={faInfo} />
                    <h3>Request More Information</h3>
                    <p className = "p-items">
                    Learn more about specific programs, or sign up for news and updates from HBS Online.</p>
                </div>
                
            </div>
            </div>


            <div className = 'about-description1'>
            <div className ='about-child1'>
            
                <div className="about-items">
                <FontAwesomeIcon className = "icon-img" icon={faDollarSign} />
                    <h3>Payments & Financial Aid</h3>
                    <p className = "p-items">
                    Get answers to your questions about admissions, grading, and more.</p>
                </div>
                <div className="about-items">
                <FontAwesomeIcon className = "icon-img" icon={faList} />
                    <h3>Policies</h3>
                    <p className = "p-items">
                    Get details on academics, accommodations, changing your program status, and more.</p>
                </div>
                
            </div>
            </div>


            </div>
    );
};

export default About;