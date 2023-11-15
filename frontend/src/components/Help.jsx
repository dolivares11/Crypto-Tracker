import '../assets/styles/help.css'
import React from 'react';

function Help () {
    return (
        <section id='help'>
            <h1 className='help-title'>Help</h1>
            <p className='help-text'>If you need help with anything, please contact us at  
                <a href='mailto:dolivares@ucsd.edu'> dolivares@ucsd.edu</a>
            </p>
        </section>
    )
}

export default Help;