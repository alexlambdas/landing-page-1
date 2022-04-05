import React from "react";
import Header from "./../../components/Header/Header";
import Brands1LandinPage from "../../components/Brands1LandinPage/Brands1LandinPage";
import Section1LandinPage from "../../components/Section1LandinPage/Section1LandinPage";
import Section2LandinPage from "../../components/Section2LandinPage/Section2LandinPage";
import Section3LandinPage from "../../components/Section3LandinPage/Senction3LandinPage";
import Footer1LandinPage from "../../components/Footer1LandinPage/Footer1LandinPage";


import styles from "./Styles";

function LandingPage(props){

    const { openNav, handleOpenNav } = props;

    return(
        <>
            <div style={styles.landinPage}>
                <div>
                    <div style={styles.landinPage_intro}>
                        <div style={styles.landinPage_introHeader}>
                            <Header 
                                openNav={openNav}
                                handleOpenNav={handleOpenNav}/>
                        </div>
                        <div style={styles.landinPage_introSection1}>
                            <Section1LandinPage />
                        </div>
                        <div style={openNav ? styles.header_overlayTrue : styles.header_overlayFalse}>
                        </div>
                    </div>
                </div>
                <div>
                    <main style={styles.main}>
                        <Brands1LandinPage />
                        <Section2LandinPage />
                        <Section3LandinPage />
                        <Footer1LandinPage />
                    </main>
                </div>
                
            </div>
        </>
    )
}

export default LandingPage;