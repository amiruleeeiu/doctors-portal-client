import React from 'react';
import gif from '../../images/tenor.gif'
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading">
            <img src={gif} alt=""/>
        </div>
    );
};

export default Loading;