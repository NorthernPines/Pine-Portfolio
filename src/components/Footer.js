import React from 'react';
import img1 from "./../images/GitHub_Logo.png";
import img2 from "./../images/LI-In-Bug.png";
import img3 from "./../images/gitlab-logo-100.jpg";

export default function Footer() {
    return (
        <div className='container p-2'>
            <div className='d-flex justify-content-center'>
                <a className='p-5' href="https://github.com/NorthernPines">
                    <img src={img1} alt="GitHub" width="180"/>
                </a>
                <a className='p-5' href="https://www.linkedin.com/in/travis-walborn-5136b5243/">
                    <img src={img2} alt="Linked In" width="72"/>
                </a>
                <a className='p-3' href="https://upenn.bootcampcontent.com/traviswalborn8-OaXWMU">
                    <img src={img3} alt="GitLab" width="300"/>
                </a>
            </div>
        </div>
    )
}