import React from 'react';
import './App.css';
import ButtonAppBar  from './components/Navbar'
import  SpacingGrid from './views/aboutme'
import Container from '@material-ui/core/Container'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});
function  App(){

  return (
    
    <div className="App">
      <MuiThemeProvider theme={theme}>
      <div>
      <ButtonAppBar></ButtonAppBar>  
      </div>
     
      <Container>  <SpacingGrid></SpacingGrid> </Container>
          </MuiThemeProvider>
    </div>
   
  );
  }

export default App;
