import React from "react";
import classNames from "classnames";
import styles from "../assets/jss/parallaxStyle";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
const image = require("../assets/images/me.JPG");

const Parallax = (props) => {
    const { filter, className, children, style, small } = props;

    const classes = useStyles();

    const parallaxClasses = classNames({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        [className]: className !== undefined
    });

    let windowScrollTop;
    if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3;
    } else {
        windowScrollTop = 0;
    }
    const [transform, setTransform] = React.useState(
        "translate3d(0," + windowScrollTop + "px,0)"
    );
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    return (
        <div
            className={parallaxClasses}
            style={{
                ...style,
                backgroundImage: "url(" + image + ")",
                transform: transform
            }}
        >
            {children}
        </div>
    );
};

export default Parallax;