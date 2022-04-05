const styles = {
    /** styles for main section */
    section1: {
        width: "100%",
        position: "relative",
    },
    /** styles for polygon shape section */
    section1_polygonLeftToRight:{
        position: "absolute", // top position relative to section1
        width: "100%",
        height: "90vh",
    },
    /** styles for main container box section */
    section1_boxMainContainer: {
        position: "absolute", // top position relative to section1
        top: "100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    section1_boxContainer: {
        width: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    section1_boxLeftContainer: {
        display: "flex",
        flexDirection: "column",
        paddingRight: "150px",
        //color: "#f5f5f5"
    },
    section1_boxLeftContainerTitle: {
        color: "#fff",
        fontSize: "48px",
    },
    section1_boxLeftContainerParagraph: {
        color: "#fff",
        fontSize: "20px",
    },
    section1_boxLeftContainerBtns: {
        display: "flex",
        flexDirection: "row",
        paddingTop: "30px",
        color: "#fff",
        fontSize: "22px",
    },
    section1_boxLeftBtnGhost1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "140px",
        height: "40px",
        marginRight: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "7px",
        fontSize: "18px",
    },
    section1_boxLeftBtnGhost2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "140px",
        height: "40px",
        backgroundColor: "rgba(63, 81, 181, 1)",
        borderRadius: "7px",
        fontSize: "18px",
        
    },
    /** styles for right container */
    section1_boxRightContainer: {
        display: "flex",
    },
    section1_boxRightImg: {
        width: "260px",
        height: "518px",
    }
};

export default styles;