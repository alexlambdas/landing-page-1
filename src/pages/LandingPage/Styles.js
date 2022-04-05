const styles = {
    /** styles for landinPage */
    landinPage: {
        display: "flex",
        flexDirection: "column",
    },
    /** styles for intro section */
    landinPage_intro: {
        width: "100%",
        position: "relative",
    },
    landinPage_introHeader: {
        width: "100%",
        position: "absolute",
    },
    landinPage_introSection1: {
        width: "100%",
        position: "absolute",
    },
    header_overlayTrue: {
        position: "absolute",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.8)",
        transition: "0.7s",
    },
    header_overlayFalse: {
        position: "absolute",
    },
    /** styles for main section */
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "100vh",
        width: "100%",
    }
}

export default styles;