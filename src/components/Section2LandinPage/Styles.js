const styles = {
    /** styles for main section */
    section2: {
        width: "100%",
        position: "relative",
    },
    /** styles for polygon shape section */
    section2_polygonLeftToRight:{
        position: "absolute", // top position relative to section2
        width: "100%",
        height: "90vh",
        backgroundColor: "rgba(63, 81, 181, 1)",
    },
    /** styles for main container box section */
    section2_boxMainContainer: {
        position: "absolute", // top position relative to section2
        top: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    section2_boxContainer: {
        width: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    section2_boxLeftContainer: {
        display: "flex",
        flexDirection: "column",
        paddingRight: "150px",
    },
    section2_boxLeftContainerTitle: {
        color: "#fff",
        fontSize: "48px",
    },
    section2_boxLeftContainerParagrahp: {
        color: "#fff",
        fontSize: "22px",
        paddingTop: "26px",
    },
    section2_boxLeftContainerBtns: {
        display: "flex",
        flexDirection: "row",
        paddingTop: "30px",
        color: "#fff",
        fontSize: "22px",
    },
    section2_boxLeftBtnGhost1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "140px",
        height: "40px",
        backgroundColor: "rgba(248, 65, 141, 1)",
        borderRadius: "7px",
        fontSize: "18px",
        
    },
    section2_boxRightContainer: {
        display: "flex",
        flexDirection: "column",
    },
    section2_boxRightImg: {
        width: "260px",
        height: "518px",
    }
};

export default styles;