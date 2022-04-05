import { Link } from "react-router-dom";
import SvgHamburguer from "./SvgHamburguer/SvgHamburguer";
import SvgClose from "./SvgClose/SvgClose";
import SvgGithub from "./SvgGitHub/SvgGithub";
import SvgLinkedin from "./SvgLinkedin/SvgLinkedin";
import SvgFacebook from "./SvgFacebook/SvgFacebook";
import SvgYoutube from "./SvgYoutube/SvgYoutube";
import SvgWhatsApp from "./SvgWhatsApp/SvgWhatsApp";
import SvgTwitter from "./SvgTwitter/SvgTwitter";
import SvgInstagram from "./SvgInstagram/SvgInstagram";
import SvgTikTok from "./SvgTikTok/SvgTikTok";
import ImgProfile from "./img/001-avatar.png";

import styles from "./Styles";
import "./Styles.css";


function SideNavBar(props) {

    const { openNav, handleOpenNav } = props;

    const handleSideNavOpenAndClose = () => handleOpenNav();

    const sideNavBarConfig = {
        profile: {
            set: true,
            config: {
                mail: "alexdanielmeza@gmail.com",
                number: "+57 3143982292",
                location: "Bogotá, Colombia"
            }
        },
        navbar: {
            set: true,
            config: {
                items: [
                    {
                        text: "Products",
                        style: "normal",
                    },
                    {
                        text: "Developers",
                        style: "normal",
                    },
                    {
                        text: "Company",
                        style: "normal",
                    },
                    {
                        text: "Pricing",
                        style: "normal",
                    },
                    {
                        text: "Sign In",
                        style: "ghost_btn",
                    }
                ]
            }
        },
        networks: {
            set: true,
            config: {
                linkdedin: {
                    set: true,
                    text: "Linkedin",
                    url: "https://www.linkedin.com/in/alex-daniel-meza-lopez/"
                },
                whatsapp: {
                    set: true,
                    text: "WhatsApp",
                    url: "https://www.google.com/"
                },
                tiktok: {
                    set: false,
                    text: "Tiktok",
                    url: "https://www.google.com/"
                },
                facebook: {
                    set: true,
                    text: "Facebook",
                    url: "https://www.facebook.com/alexdl2"
                },
                instagram: {
                    set: true,
                    text: "Instagram",
                    url: "https://www.instagram.com/alexdl3/"
                },
                twitter: {
                    set: false,
                    text: "Twitter",
                    url: "https://twitter.com/soyalexdaniel"
                },
                github: {
                    set: true,
                    text: "Github",
                    url: "https://github.com/alexlambdas"
                },
                youtube: {
                    set: true,
                    text: "Youtube",
                    url: "https://www.youtube.com/channel/UCdM76WdfnTPRG5mziyFJMpg"
                }   
            }
        }
    }

    const fnLinkedinItem = () => {
        if(sideNavBarConfig.networks.config.linkdedin.set){
            return(
                <a 
                    style={styles.sideNav_OpenItem}
                    href={sideNavBarConfig.networks.config.linkdedin.url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <div 
                            style={styles.sideNav_Item} 
                            className="sideNav_Item"
                            onClick={handleSideNavOpenAndClose}>
                                <SvgLinkedin 
                                    height="20px" 
                                    width="20px" 
                                    fill="#7986cb"/> 
                                <span 
                                    style={styles.sideNav_itemText}
                                    className="sideNav_Item_Text">
                                        {sideNavBarConfig.networks.config.linkdedin.text}
                                </span>
                        </div>
                </a>
            );
        }
    };

    const fnInstagramItem = () => {
        if(sideNavBarConfig.networks.config.instagram.set){
            return(
                <a 
                    style={styles.sideNav_OpenItem}
                    href={sideNavBarConfig.networks.config.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <div 
                            style={styles.sideNav_Item} 
                            className="sideNav_Item"
                            onClick={handleSideNavOpenAndClose}>
                                <SvgInstagram
                                    height="20px" 
                                    width="20px" 
                                    fill="#7986cb"/> 
                                <span 
                                    style={styles.sideNav_itemText}
                                    className="sideNav_Item_Text">
                                        {sideNavBarConfig.networks.config.instagram.text}
                                </span>
                        </div>
                </a>
            );
        }
    };

    const fnTwitterItem = () => {
        if(sideNavBarConfig.networks.config.twitter.set){
            return(
                <a 
                    style={styles.sideNav_OpenItem}
                    href={sideNavBarConfig.networks.config.twitter.url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <div 
                            style={styles.sideNav_Item} 
                            className="sideNav_Item"
                            onClick={handleSideNavOpenAndClose}>
                                <SvgTwitter
                                    height="20px" 
                                    width="20px" 
                                    fill="#7986cb"/> 
                                <span 
                                    style={styles.sideNav_itemText}
                                    className="sideNav_Item_Text">
                                        {sideNavBarConfig.networks.config.twitter.text}
                                </span>
                        </div>
                </a>
            );
        }
    }

    const fnWhatsAppItem = () => {
        if(sideNavBarConfig.networks.config.linkdedin.set){
            return(
                <a 
                    style={styles.sideNav_OpenItem}
                    href={sideNavBarConfig.networks.config.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <div 
                            style={styles.sideNav_Item} 
                            className="sideNav_Item"
                            onClick={handleSideNavOpenAndClose}>
                                <SvgWhatsApp 
                                    height="20px" 
                                    width="20px" 
                                    fill="#7986cb"/> 
                                <span 
                                    style={styles.sideNav_itemText}
                                    className="sideNav_Item_Text">
                                        {sideNavBarConfig.networks.config.whatsapp.text}
                                </span>
                        </div>
                </a>
            );
        }
    };

    const fnTiktokItem = () => {
        if(sideNavBarConfig.networks.config.tiktok.set){
            return(
                <a 
                    style={styles.sideNav_OpenItem}
                    href={sideNavBarConfig.networks.config.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <div 
                            style={styles.sideNav_Item} 
                            className="sideNav_Item"
                            onClick={handleSideNavOpenAndClose}>
                                <SvgTikTok
                                    height="20px" 
                                    width="20px" 
                                    fill="#7986cb"/> 
                                <span 
                                    style={styles.sideNav_itemText}
                                    className="sideNav_Item_Text">
                                        {sideNavBarConfig.networks.config.tiktok.text}
                                </span>
                        </div>
                </a>
            );
        }
    };

    const fnFacebookItem = () => {
        if(sideNavBarConfig.networks.config.facebook.set){
            return(
                <a 
                    style={styles.sideNav_OpenItem}
                    href={sideNavBarConfig.networks.config.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <div 
                            style={styles.sideNav_Item} 
                            className="sideNav_Item"
                            onClick={handleSideNavOpenAndClose}>
                                <SvgFacebook
                                    height="20px" 
                                    width="20px" 
                                    fill="#7986cb"/> 
                                <span 
                                    style={styles.sideNav_itemText}
                                    className="sideNav_Item_Text">
                                        {sideNavBarConfig.networks.config.facebook.text}
                                </span>
                        </div>
                </a>
            );
        }
    };

    const fnYoutubeItem = () => {
        if(sideNavBarConfig.networks.config.youtube.set){
            return(
                <a 
                    style={styles.sideNav_OpenItem}
                    href={sideNavBarConfig.networks.config.youtube.url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <div 
                            style={styles.sideNav_Item} 
                            className="sideNav_Item"
                            onClick={handleSideNavOpenAndClose}>
                                <SvgYoutube
                                    height="20px" 
                                    width="20px" 
                                    fill="#7986cb"/> 
                                <span 
                                    style={styles.sideNav_itemText}
                                    className="sideNav_Item_Text">
                                        {sideNavBarConfig.networks.config.youtube.text}
                                </span>
                        </div>
                </a>
            );
        }
    };

    const fnGitHubItem = () => {
        if(sideNavBarConfig.networks.config.github.set){
            return(
                <a 
                    style={styles.sideNav_OpenItem}
                    href={sideNavBarConfig.networks.config.github.url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <div 
                            style={styles.sideNav_Item} 
                            className="sideNav_Item"
                            onClick={handleSideNavOpenAndClose}>
                                <SvgGithub
                                    height="20px" 
                                    width="20px" 
                                    fill="#7986cb"/> 
                                <span 
                                    style={styles.sideNav_itemText}
                                    className="sideNav_Item_Text">
                                        {sideNavBarConfig.networks.config.github.text}
                                </span>
                        </div>
                </a>
            );
        }
    };

    const sideNavProfile = (
        <div style={styles.sideNavProfile}>
            <img 
                style={styles.sideNav_profileImg}
                src={ImgProfile}
                alt="profile"/>
            <span 
                style={styles.sideNavProfile_text}
                className="sideNavProfile_text">
                    {sideNavBarConfig.profile.config.mail}
            </span>
            <span 
                style={styles.sideNavProfile_text}
                className="sideNavProfile_text">
                    +57 3143982292
            </span>
            <span 
                style={styles.sideNavProfile_text}
                className="sideNavProfile_text">
                    Bogotá, Colombia
            </span>
        </div>
    );

    const sideNavOnlyClose = (
        <div 
            style={styles.sideNav_CloseBtn} 
            onClick={handleSideNavOpenAndClose}>
                <div></div>
                <SvgClose 
                    height="14px" 
                    width="14px" 
                    fill="#fff"/>
        </div>
    );

    const sideNavBar = (
        <>
            {sideNavBarConfig.navbar.config.items.map((itemNav, id) => {
                return(
                    <Link
                        key={id}
                        style={styles.sideNav_navBar_Item_Link}
                        className="sideNav_navBar_Item_Link" 
                        to="/">
                            <span
                                style={styles.sideNav_navBar_Item_Text}
                                className="sideNav_navBar_Item_Text">
                                {itemNav.text}
                            </span>
                    </Link>
                )
            })}
        </>
    );

    const sideNavNetworks = (
        <>
            {fnLinkedinItem()}
            {fnInstagramItem()}
            {fnTiktokItem()}
            {fnTwitterItem()}
            {fnGitHubItem()}
            {fnFacebookItem()}
            {fnYoutubeItem()}
            {fnWhatsAppItem()}
        </>
    );



    const sideNav = (
        <>
            {sideNavBarConfig.profile.set ? sideNavProfile : sideNavOnlyClose}
            {(sideNavBarConfig.navbar.set) && sideNavBar}
            {(sideNavBarConfig.navbar.set) && <hr style={styles.sideNav_hrSeparator}/>}
            {(sideNavBarConfig.networks.set) && sideNavNetworks}
        </>
    );

    const sideNavOpen = (
        <div style={styles.sideNav_Open}>
            {sideNav}
        </div>
    );

    const sideNavClose = (
        <div style={styles.sideNav_Close}>
            {sideNav}
        </div>
    );

    const fnNavBarItems = () => {
        if(sideNavBarConfig.navbar.config.items.length > 0){
            return(
                <>
                    {sideNavBarConfig.navbar.config.items.map((itemNav, id) => {
                        return(
                            <div>
                                <Link 
                                    key={id}
                                    style={styles.nav_linkItem} 
                                    to="/">
                                    <span 
                                        style={itemNav.style === "ghost_btn" ? (
                                            styles.nav_rightItem_ghostBtn
                                        ) : (
                                            styles.nav_rightItem
                                        )} 
                                        className="nav_rightItem">
                                            {itemNav.text}
                                    </span>
                                </Link>
                            </div>
                        )
                    })}
                </>
            )
        }
    };


    return(
        <nav style={styles.nav}>
            {openNav ? sideNavOpen : sideNavClose}
            <div style={styles.nav_left}>
                <div 
                    style={styles.nav_leftItem}
                    onClick={handleSideNavOpenAndClose}>
                        <SvgHamburguer 
                            height="20px" 
                            width="20px" 
                            fill="#fff"/>
                </div>
            </div>
            <div style={styles.nav_Right}>
                {fnNavBarItems()}
            </div>
        </nav>
    )
}

export default SideNavBar;