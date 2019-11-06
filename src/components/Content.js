import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/typographyStyle";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStylesTabPanel = makeStyles(theme => ({
    custom: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        marginTop: "-50px"
    },
}));

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const Content = () => {
    const classes = useStyles();
    const image = require("../assets/images/me-github.jpg");
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <img
                src={image}
                alt="..."
                className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                }
            />
            <Paper className={useStylesTabPanel.custom} style={{ marginTop: "-60px"}}>
                <Tabs
                    centered
                    value={value}
                    onChange={handleChange}

                >
                    <Tab label="Work Experience" icon={<BusinessCenterIcon/>}  {...a11yProps(0)}/>
                    <Tab label="Education" icon={<LocalLibraryIcon/>}  {...a11yProps(1)}/>
                    <Tab label="Honors & Awards" icon={<CardMembershipIcon/>}  {...a11yProps(2)}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Paper>
        </div>
    )
};

export default Content;