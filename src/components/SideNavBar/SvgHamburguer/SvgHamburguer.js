import React from 'react';

function SvgHamburguer(props){

    const {fill, width, height} = props;

    const styles = {
        style1: {
            enableBackground: "new 0 0 512 512"
        },
    }

    return(
        <div>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1" 
                id="Capa_1"
                x="0px" 
                y="0px" 
                viewBox="0 0 512 512" 
                style={styles.style1}
                fill={fill} 
                width={width}
                height={height}>
                <g>
                    <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
                    <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z" />
                    <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z" />
                </g>
            </svg>

        </div>
    )
}

export default SvgHamburguer;