/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import React from "react";
import 
  { 
    makeStyles, 
    withStyles, 
    useTheme, 
    createMuiTheme,
    Tabs,
    Tab,
    Box,
    Typography,
  } from "@material-ui/core/";
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
  indicator: {
    backgroundColor: "#36C3A2"
  }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10.276rem",
    width: 968,
    margin: "0 auto",
    [theme.breakpoints.down('media_sm')]: {
    paddingTop: "10.276rem",
    width: 330,
    },
  },
  tabs: {
    indicatorColor: "#36C3A2",
    color: "rgba(0, 0, 0, 0.54)"
  },
  tab: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "1.6rem",
    [theme.breakpoints.down('media_sm')]: {
      fontSize: "1.2rem"
      },
  }
}));

const CategoryBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <StyledTabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="すべて" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="エンジニア" {...a11yProps(1)} className={classes.tab}/>
          <Tab label="ビジネス" {...a11yProps(2)} className={classes.tab}/>
          <Tab label="その他" {...a11yProps(2)} className={classes.tab}/>
        </StyledTabs>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* ここに三項演算子でfilterの分岐作る */}
        <TabPanel value={value} index={0} dir={theme.direction} className={classes.tab}>
          all filter
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}　className={classes.tab}>
          engineer filter
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} className={classes.tab}>
          business filter
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction} className={classes.tab}>
          other
        </TabPanel>
      </SwipeableViews>
      </div>
    </div>
  );
}

export default CategoryBar