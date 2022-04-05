import React from "react";
import ImgIntro1 from "./img/smartphone.png";

import styles from "./Styles";
import "./Styles.css";

function Section1LandinPage(){

    const section1LandinPageConfig = {
        title: {
            text: "Education for Everyone in the Internet",
            style: "normal"
        },
        paragraph: {
            text: "Thousands of people around the world are already learning new things in lessins, what are you waiting for to join?",
            style: "normal",
        }
    };


    return(
        <section style={styles.section1}>
            <div
                style={styles.section1_polygonLeftToRight}
                className="section1_polygonLeftToRight">
            </div>
            <div style={styles.section1_boxMainContainer}>
                <div style={styles.section1_boxContainer}>
                    <div style={styles.section1_boxLeftContainer}>
                        <h4 style={styles.section1_boxLeftContainerTitle}>
                            {section1LandinPageConfig.title.text}
                        </h4>
                        <p 
                            style={styles.section1_boxLeftContainerParagraph}
                            className="section1_boxLeftContainerParagraph">
                                {section1LandinPageConfig.paragraph.text}
                        </p>
                        <div style={styles.section1_boxLeftContainerBtns}>
                            <a 
                                style={styles.section1_boxLeftBtnGhost1}
                                className="section1_boxLeftBtnGhost1">
                                    Start Now
                            </a>
                            <a 
                                style={styles.section1_boxLeftBtnGhost2}
                                className="section1_boxLeftBtnGhost2">
                                    Contact Sales
                            </a>
                        </div>
                    </div>
                    <div style={styles.section1_boxRightContainer}>
                        <div>
                            <img 
                                src={ImgIntro1} 
                                alt="intro1" 
                                style={styles.section1_boxRightImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1LandinPage;