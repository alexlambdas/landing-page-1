import React from 'react';

function SvgYoutube(props){

    const {fill, width, height} = props;

    return(
        <div>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                id="Filled" 
                viewBox="0 0 24 24" 
                fill={fill}
                width={width} 
                height={height}>
                    <path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z" />
            </svg>
        </div>
    )
}

export default SvgYoutube;