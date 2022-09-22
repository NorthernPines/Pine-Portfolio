import React from 'react';
import img1 from "./../images/GitHub_Logo.png";
import img2 from "./../images/LI-In-Bug.png"

export default function Footer() {
    return (
        <div className='container p-2'>
            <div className='d-flex justify-content-center'>
                <a className='p-4' href="https://github.com/NorthernPines">
                    <img src={img1} alt="GitHub" width="180"/>
                </a>
                <a className='p-4' href="https://www.linkedin.com/in/travis-walborn-5136b5243/">
                    <img src={img2} alt="Linked In" width="72"/>
                </a>
            </div>
        </div>
    )
}