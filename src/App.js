import './App.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
// import { Avatar } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { IconButton } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RestoreIcon from '@material-ui/icons/Restore';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import TimerIcon from '@material-ui/icons/Timer';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';


function App() {

  //DRAWER TINGS 
  const [openClose, setOpenClose] = useState(false); //opening and closing the drawer
  const drawerList = {
    "Report": <AssessmentIcon />, 
    "Settings": <SettingsIcon />,
    "Profile": <AccountCircleIcon />,
  };
 
  //DARK MODE TINGS
  const [darkMode, setDarkMode] = useState(true); //darkmode state
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
          },
        },
      }),
    [darkMode],
  );

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    root: {
      width: 350,
    },
    header: {
      display: "flex", 
      flexDirection: "row",
    }
  });

  const classes = useStyles();

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Drawer transitionDuration={600}  open={openClose} onClose={() => {setOpenClose(false);}}>
        <List className= {classes.list}>
          {Object.entries(drawerList).map(([label, icon]) => (
            <ListItem button key={label}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
          ))}
        </List>
      </Drawer>
      <div>
        <Header />
      </div>
    </ThemeProvider>
    
  );

  function Header() {
    return (
      <div>
        <div className={classes.header} style={{justifyContent: "space-between", alignItems: "center" }}>
          {/* Div below is for the hamburger icon and the title */}
          <div className={classes.header}  style={{justifyContent: "start", marginLeft: "calc(10% - 40px)" }}>
            <IconButton style={{ marginLeft: "-2vw", marginRight: "2vw" }} onClick={() => { setOpenClose(true); }}>
              <MenuRoundedIcon />
            </IconButton>
            <h1>Pomodoro Timer</h1>
          </div>
          {/* This is for the darkmode functionality */}
          <div style={{ marginRight: "calc(10%)" }}>
            <IconButton onClick={() => { setDarkMode(!darkMode); }}>
              {darkMode === false ? <WbSunnyRoundedIcon /> : <NightsStayIcon />}
            </IconButton>
          </div>
        </div>
        <center>
          <Divider style={{ width: "80vw" }} />
        </center>
        Div
      </div>
    );
  }
}

export default App;
