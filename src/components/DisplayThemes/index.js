import React from 'react';
import './index.css'


const DisplayThemes = props => {
    const {themes} = props;
    const {themeName, subThemes} = themes ;

    return(
        <li className='list-container'>
            <div>
                <h4 className='theme-name'>{themeName}</h4>
                <ul>
                {
                subThemes.map(eachSubTheme =>(
                    <li className='subthemes'>{eachSubTheme}</li>
                ))
            }
                </ul>
            </div>
        </li>
    )
}

export default DisplayThemes