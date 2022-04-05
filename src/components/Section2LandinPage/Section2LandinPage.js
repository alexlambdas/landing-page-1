import React from "react";
import ImgSection from "./img/smartphone-3916548.png";

import styles from "./Styles";
import "./Styles.css";

function Section2LandinPage(){
    return(
        <section style={styles.section2}>
            <div
                style={styles.section2_polygonLeftToRight}
                className="section2_polygonLeftToRight">
            </div>
            <div style={styles.section2_boxMainContainer}>
                <div style={styles.section2_boxContainer}>
                    <div style={styles.section2_boxLeftContainer}>
                        <div>
                            <h4 style={styles.section2_boxLeftContainerTitle}>
                                Thousands of people around the
                                world are already learning          
                            </h4>
                        </div>
                        <div>
                            <p 
                                style={styles.section2_boxLeftContainerParagrahp}
                                className="section2_boxLeftContainerParagrahp">
                                    We deliver high quality content that will impact in
                                    your professional sfe. Get started now or read the
                                    docs to know more.
                            </p>
                        </div>
                        <div style={styles.section2_boxLeftContainerBtns}>
                            <a 
                                style={styles.section2_boxLeftBtnGhost1}
                                className="section2_boxLeftBtnGhost1">
                                    Read docs
                            </a>
                        </div>
                    </div>
                    <div style={styles.section2_boxRightContainer}>
                        <div>
                            <img 
                                src={ImgSection} 
                                alt="smartphone"
                                style={styles.section2_boxRightImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Section2LandinPage;