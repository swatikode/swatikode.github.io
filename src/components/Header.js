import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/header";
import AppBar from "@material-ui/core/AppBar";

import classNames from "classnames";

const useStyles = makeStyles(styles);

const Header = (props) => {
    const classes = useStyles();
    const { color } = props;

    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: true,
        [classes.background]: true
    });
    return (
        <AppBar className={appBarClasses} />
    )
};

export default Header;