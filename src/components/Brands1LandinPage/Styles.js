const styles = {
    brands1_containerMain: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingBottom: "10vh",
    },
    brands1_containerTitle: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        marginBottom: "30px"
    },
    brands1_containerTitleText: {
        fontSize: "44px",
        color: "#37474f",
    },
    brands1_containerImgs: {
        width: "90%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 25%)",
        gridTemplateRows: "auto",
        paddingBottom: "20px",
        justifyContent: "center",
        
    },
    brands1_containerOneImg: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "250px",
        height: "120px",
        cursor: "pointer",
    }
}

export default styles;