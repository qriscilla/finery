import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import Clothes from './components/pages/Clothes';
import Shoes from './components/pages/Shoes';
import Accessories from './components/pages/Accessories';
import Search from './components/pages/Search';
import Account from './components/pages/Account';
import Cart from './components/pages/Cart';
import Footer from './components/Footer';
import Item from './components/pages/Item';
import Tops from './components/pages/Tops';
import Bottoms from './components/pages/Bottoms';
import Outer from './components/pages/Outer';
import Boots from './components/pages/Boots';
import Heels from './components/pages/Heels';
import Sneakers from './components/pages/Sneakers';
import Bags from './components/pages/Bags';

function App() {
  return (
    <Router>
      <Grid container className='app'>

        <Grid item xs={12}><Nav /></Grid>

        <Grid item container justify='center' className='app__body'>
          <Switch>
            <Route path='/finery' exact component={Home} />

            <Route path='/finery/clothes' exact component={Clothes} />
            <Route path='/finery/clothes/tops' component={Tops} />
            <Route path='/finery/clothes/bottoms' component={Bottoms} />
            <Route path='/finery/clothes/outer' component={Outer} />

            <Route path='/finery/shoes' exact component={Shoes} />
            <Route path='/finery/shoes/boots' exact component={Boots} />
            <Route path='/finery/shoes/heels' exact component={Heels} />
            <Route path='/finery/shoes/sneakers' exact component={Sneakers} />


            <Route path='/finery/accessories' exact component={Accessories} />
            <Route path='/finery/accessories/bags' exact component={Bags} />

            <Route path='/finery/search' exact component={Search} />
            <Route path='/finery/account' exact component={Account} />
            <Route path='/finery/cart' exact component={Cart} />

            <Route path='/finery/products' component={Item} />
          </Switch>              
        </Grid>

        <Grid item container xs={12} justify='center' alignContent='flex-end'><Footer /></Grid>
    
      </Grid>
    </Router>
  );
}

export default App;
