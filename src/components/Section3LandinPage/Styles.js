const styles = {
    /** styles for section 3 */
    section3: {
        width: "100%",
        position: "relative",
        top: "100vh",
    },
    /** styles for section3_boxTopContainer */
    section3_boxTopContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    section3_boxTopContainerTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "80%",
    },
    section3_title: {
        paddingTop: "10px",
        paddingBottom: "100px",
        paddingLeft: "15px",
        fontSize: "44px",
        color: "#37474f",
    },
    /** styles for section3_boxBottomContainer */
    section3_boxBottomContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    section3_boxBottomContainerCards: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 25%)",
        gridTemplateRows: "auto",
        paddingBottom: "20px",
        justifyContent: "center",
        width: "80%",
    },
    section3_boxBottomCard: {
        width: "85%",
    },
    /** styles for card */
    card1: {
        display: "flex",
        flexDirection: "column",
    },
    card1_imgContainer: {

    },
    card1_img: {
        width: "150px",
        height: "auto",
    },
    card1_titleContainer: {
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    card1_title: {
        fontSize: "24px",
        color: "#37474f",
    },
    card1_textContainer: {
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    card1_text: {
        fontSize: "20px",
        color: "#37474f",
    }
}

export default styles;