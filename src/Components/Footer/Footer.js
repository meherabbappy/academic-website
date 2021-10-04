import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <h5 className = "footer">All CopyRight Reserved By <span><FontAwesomeIcon icon = {faCopyright}/> Meherab Hossain</span></h5>
        </div>
    );
};

export default Footer;