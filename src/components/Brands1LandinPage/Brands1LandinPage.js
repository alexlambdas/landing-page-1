import React from "react";
import ImgInstacart from "./img/instacart-ar21.svg";
import ImgSalesforce from "./img/salesforce-ar21.svg";
import ImgAmazon from "./img/amazon-ar21.svg";
import ImgSlack from "./img/slack-ar21.svg";
import ImgShopify from "./img/shopify-ar21.svg";
import ImgGoogle from "./img/google-ar21.svg";
import ImgSkype from "./img/skype-ar21.svg";
import ImgZoom from "./img/zoomus-ar21.svg";

import styles from "./Styles";
import "./Styles.css";

function Brands1LandinPage(){
    return(
        <section style={styles.brands1_containerMain}>  
            <div style={styles.brands1_containerTitle}>
                <h4 style={styles.brands1_containerTitleText}>
                    Our Clients!
                </h4>
            </div> 
            <div style={styles.brands1_containerImgs}>
                <div style={styles.brands1_containerOneImg}>
                    <img 
                        src={ImgInstacart} 
                        alt="instacart brand"
                        className="brands1_img"/>
                </div>
                <div style={styles.brands1_containerOneImg}>
                    <img 
                        src={ImgSalesforce} 
                        alt="salesforce brand"
                        className="brands1_img"/>
                </div>
                <div style={styles.brands1_containerOneImg}>
                    <img 
                        src={ImgAmazon} 
                        alt="amazon brand"
                        className="brands1_img"/>
                </div>
                <div style={styles.brands1_containerOneImg}>
                    <img 
                        src={ImgSlack} 
                        alt="slack brand"
                        className="brands1_img"/>
                </div>
                <div style={styles.brands1_containerOneImg}>
                    <img 
                        src={ImgShopify} 
                        alt="shopify brand"
                        className="brands1_img"/>
                </div>
                <div style={styles.brands1_containerOneImg}>
                    <img 
                        src={ImgGoogle} 
                        alt="google brand"
                        className="brands1_img"/>
                </div>
                <div style={styles.brands1_containerOneImg}>
                    <img 
                        src={ImgSkype} 
                        alt="skype brand"
                        className="brands1_img"/>
                </div>
                <div style={styles.brands1_containerOneImg}>
                    <img 
                        src={ImgZoom} 
                        alt="zoom brand"
                        className="brands1_img"/>
                </div>
            </div>
        </section>
    )
}

export default Brands1LandinPage;