import React, { useState } from 'react';
import './AIconfirm.css';
import { Link } from 'react-router-dom';

const AIconfirm = () => {

    return (
        <div>
        <div className="AIconfirm">
            <img src={require('./Home icon/AI id precaution.jpeg')} className="AISample" />
            
        </div>
        <div>
            <Link to="/discorer" className='AIdiscover'>Confirm</Link>
            <Link to="/ManualInput" className='ManualInput'>Other</Link>
        </div>
        </div>
    );
};

export default AIconfirm;

