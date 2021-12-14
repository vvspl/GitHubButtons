import React from 'react';
import './Preview.css';

const Preview = ()=>{
    return(
        <div className='previewContainer'>
            <h2>Preview and code</h2>
            <p>Try out your button, then copy and paste the code below into the HTML of your site.</p>
            <button className='tryButton'></button>
            <input className='generatedLinkField' type='text'/>
        </div>
    );
}

export default Preview;