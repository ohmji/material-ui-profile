import React from 'react';
import './App.css';
import ButtonAppBar  from './components/Navbar'
import  SpacingGrid from './views/aboutme'
import Container from '@material-ui/core/Container'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import Zoom from 'react-reveal/Zoom'
import BackgroundImagePage from './views/begins/begins'
import Resume from './views/resume'
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});



function App ()  {
 
 

 

   
  return (
    
    <div className="App">
     
      <MuiThemeProvider theme={theme}>

      <div  >
        <ButtonAppBar></ButtonAppBar>  
      </div>
      <BackgroundImagePage></BackgroundImagePage>
      <Zoom>
        <Container>  <SpacingGrid></SpacingGrid> </Container>
          <Container> <Resume></Resume></Container>
      </Zoom>
     
      
      </MuiThemeProvider>
           
      
    </div>
   
  );
  }

export default App;
