import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Grid container className='app'>

      <Grid item xs={12} className='nav'>
        <Nav />        
      </Grid>

      <Grid item container xs={12} justify='center' alignContent='flex-end'>
        <Footer />           
      </Grid>
  
    </Grid>
  );
}

export default App;
