import React from 'react';

function SvgTikTok(props){

    const {fill, width, height} = props;

    const styles = {
        style1: {
            enableBackground: "new 0 0 24 24"
        }
    }

    return(
        <div>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1" 
                id="Capa_1" 
                x="0px" 
                y="0px" 
                viewBox="0 0 24 24" 
                style={styles.style1}
                fill={fill}
                width={width}
                height={height}>
                <path d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594c-1.618,0-3.119-0.51-4.352-1.376  c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235  c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469c0,1.332,0.756,2.489,1.86,3.07  c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126c0,0.358,0.035,0.707,0.097,1.047  c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z" />
            </svg>
        </div>
    )
}

export default SvgTikTok;