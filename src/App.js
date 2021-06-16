import './App.css';
import React, { useState } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { IconButton } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';



function App() {

  const [openClose, setOpenClose] = useState(false); //opening and closing the drawer
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
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );

  function Header() {
    return (
      <div>
        <div  style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <AppDrawer />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", marginLeft: "calc(10% - 40px)" }}>
            <IconButton style = {{ marginLeft: "-2vw", marginRight: "2vw"}} onClick={() => { setOpenClose(true); }}>
              <MenuRoundedIcon />
            </IconButton>
            <h1>Pomodoro Timer</h1>
          </div>
          <div style = {{ marginRight: "calc(10%)"}}>
            <IconButton onClick={() => {setDarkMode(!darkMode); }}>
              {darkMode === false ? <WbSunnyRoundedIcon /> : <NightsStayIcon />}
            </IconButton>
          </div>
        </div>
        <center>
          <Divider style={{ width: "80vw" }} />
        </center>
      </div>
    );
  }

  function AppDrawer() {
    return (
      <Drawer
        open={openClose}
        onClose={() => {
          setOpenClose(false);
        }}
      >
        <h1>Gandu</h1>
      </Drawer>
    );
  }

  // function DarkModeOnOff() {
  //   if ()
  // }

}

export default App;
