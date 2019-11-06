const image = require("../images/coding_wp.jpg");
const headerStyles = {
    background: {
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        padding: "8px 16px",
        height: "8em",
        letterSpacing: "unset",
        "&:hover,&:focus": {
            color: "inherit",
            backgroundImage: "url(" + image + ")",
        },
        backgroundImage: "url(" + image + ")",
        backgroundPosition: "10px",
        position: "static !important"
    }
};

export default headerStyles