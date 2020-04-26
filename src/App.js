import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import Clothes from './components/pages/Clothes';
import Shoes from './components/pages/Shoes';
import Accessories from './components/pages/Accessories';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Grid container className='app'>

        <Grid item xs={12} className='nav'><Nav /></Grid>

        <Grid item container justify='center' className='app__body'>
          <Switch>
            <Route path='/finery' exact component={Home} />
            <Route path='/finery/clothes' exact component={Clothes} />
            <Route path='/finery/shoes' exact component={Shoes} />
            <Route path='/finery/accessories' exact component={Accessories} />
          </Switch>              
        </Grid>

        <Grid item container xs={12} justify='center' alignContent='flex-end'><Footer /></Grid>
    
      </Grid>
    </Router>
  );
}

export default App;
