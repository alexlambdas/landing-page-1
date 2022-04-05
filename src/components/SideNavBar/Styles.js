const styles = {
    /**
     * css styles for normal nav
     */
    nav: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "7vh",
        paddingLeft: "30px",
        paddingRight: "50px",
    },
    nav_left: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    nav_leftItem: {
        cursor: "pointer",
        marginTop: "10px",
    },
    nav_Right: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    nav_linkItem: {
        textDecoration: "none",
    },
    nav_rightItem: {
        color: "#fff",
        marginRight: "14px",
        marginTop: "10px",
    },
    nav_rightItem_ghostBtn: {
        color: "#fff",
        border: "2px solid #fff",
        borderRadius: "8px",
        padding: "8px 15px",
        marginLeft: "7px",
        marginRight: "7px",
    },
    /**
     * css styles for sideNav
     */
    sideNav_Open: {
        height: "100%", /* 100% Full-height */
        width: "250px", /* 0 width - change this with JavaScript */
        position: "fixed", /* Stay in place */
        zIndex: "1", /* Stay on top */
        top: "0", /* Stay at the top */
        left: "0",
        backgroundColor: "#ede7f6", /* purple */
        overflowX: "hidden", /* Disable horizontal scroll */
        //paddingTop: "60px", /* Place content 60px from the top */
        transition: "0.5s", /* 0.5 second transition effect to slide in the sidenav */
        boxShadow: "2px 2px 6px 1px rgba(0,0,0,0.5)",
    },
    sideNav_Close: {
        height: "100%", /* 100% Full-height */
        width: "0px", /* 0 width - change this with JavaScript */
        position: "fixed", /* Stay in place */
        zIndex: "1", /* Stay on top */
        top: "0", /* Stay at the top */
        left: "0",
        backgroundColor: "#ede7f6", /* purple */
        overflowX: "hidden", /* Disable horizontal scroll */
        //paddingTop: "60px", /* Place content 60px from the top */
        transition: "0.5s", /* 0.5 second transition effect to slide in the sidenav */
    },
    sideNav_CloseBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "20px",
        marginBottom: "10px",
        backgroundColor: "#9575cd",
        color: "#818181",
        cursor: "pointer",
    },
    sideNav_OpenItem: {
        textDecoration: "none",
        transition: "0.3s",
    },
    sideNav_Item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "22px",
        height: "34px"
    },
    sideNav_itemText: {
        fontSize: "14px",
        color: "#263238",
        marginLeft: "10px",
    },
    sideNav_navBar_Item_Link: {
        display: "block",
        textDecoration: "none",
        paddingTop: "6px",
        paddingBottom: "6px",
        paddingLeft: "52px",
        width: "100%",
    },
    sideNav_hrSeparator: {
        border: "1px solid #bdbdbd",
        marginTop: "10px",
        marginBottom: "10px",
    },
    sideNav_navBar_Item_Text: {
        fontSize: "14px",
        color: "#263238",
    },
    sideNavProfile: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(63, 81, 181, 1)",
        paddingTop: "25px",
        paddingBottom: "25px",
        marginBottom: "10px",
    },
    sideNav_profileImg: {
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        backgroundColor: "#fff",
        marginLeft: "18px",
        marginBottom: "15px",
    },
    sideNavProfile_text: {
        fontSize: "13px",
        color: "#fff",
        paddingLeft: "20px",
        paddingTop: "4px",
        paddingBottom: "1px"
    }
}

export default styles;