import React from "react";
import ImgFolder from "./img/002-folder.svg";
import ImgStickyNotes from "./img/006-sticky_notes.svg";
import ImgClock from "./img/016-clock.svg";
import ImgAgenda from "./img/041-agenda.svg";

import styles from "./Styles";
import "./Styles.css";

function Section3LandinPage(){
    return(
        <section style={styles.section3}>
            <div style={styles.section3_boxTopContainer}>
                <div style={styles.section3_boxTopContainerTitle}>
                    <h4 style={styles.section3_title}>
                        A technology-first approach to education and colaborative work
                    </h4>
                </div>
            </div>
            <div style={styles.section3_boxBottomContainer}>
                <div style={styles.section3_boxBottomContainerCards}>
                    <div style={styles.section3_boxBottomCard}>
                        <Card1 
                            img={ImgFolder}
                            title="Highlight Text"
                            text="We deliver high quality
                            content that will impact
                            in your professional life"/>
                    </div>
                    <div style={styles.section3_boxBottomCard}>
                        <Card1 
                            img={ImgStickyNotes}
                            title="Highlight Text"
                            text="Get started now or
                            read the docs to know
                            more."/>
                    </div>
                    <div style={styles.section3_boxBottomCard}>
                        <Card1 
                            img={ImgClock}
                            title="Highlight Text"
                            text="We deliver high quality
                            content that will impact
                            in your professional life."/>
                    </div>
                    <div style={styles.section3_boxBottomCard}>
                        <Card1 
                            img={ImgAgenda}
                            title="Highlight Text"
                            text="We deliver high quality
                            content that will impact
                            in your professional life."/>
                    </div>
                </div>
            </div>
        </section>
    )
}


function Card1(props){

    const { img, title, text} = props;

    return(
        <div style={styles.card1}>
            <div style={styles.card1_imgContainer}>
                <img 
                    src={img}
                    alt="image card"
                    style={styles.card1_img}/>
            </div>
            <div style={styles.card1_titleContainer}>
                <h6 style={styles.card1_title}>
                    {title}
                </h6>
            </div>
            <div style={styles.card1_textContainer}>
                <p 
                    style={styles.card1_text}
                    className="card1_text">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Section3LandinPage;