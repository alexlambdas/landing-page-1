import React from "react";

import styles from "./Styles";
import "./Styles.css";

function Footer1LandinPage(){
    return(
        <footer style={styles.footer1}>
            <div style={styles.footer1_boxMainContainer}>
                <div style={styles.footer1_titleContainer}>
                    <h4 style={styles.footer1_title}>
                        Lessins
                    </h4>
                </div>
                <div style={styles.footer1_border}></div>
                <div style={styles.footer1_textContainer}>
                    <span 
                        style={styles.footer1_text}
                        className="footer1_text">
                            ATT @copy rights
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer1LandinPage;