import React, { useState } from 'react';
import './ManualInput.css';
import { Link } from 'react-router-dom';

const ManualInput = () => {

    return (
        <div>
        <div className="ManualConfirm">
            <img src={require('./UI icon/Scroll_group.png')} className="ManualSample" />
            
        </div>
        <div>
        <Link to="/discover" className='ManualSubmit'>Submit </Link></div>
        </div>
    );
};

export default ManualInput;

