import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

function Nav() {

  // AppBar Styles and Collapse Theme
  const useStyles = makeStyles((theme) => ({
    appbar: {
      color: 'black',
      background: 'transparent',
      boxShadow: 'none'
    },
    collapse: {
      [theme.breakpoints.up('md')]: {
          display: 'none',
      },
    },
    noCollapse: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    listItem: {
      color:'black',
      textDecoration:'none',
      fontWeight:'bold',
      fontSize:'14px',
      "&:hover": {
        backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'
      },
      "&:focus": {
        backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'
      },
    },
    listItems: {
      marginLeft:'30px',
      color:'black',
      textDecoration:'none',
      fontWeight:'bold',
      fontSize:'12px',
      "&:hover": {
        backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'
      },
      "&:focus": {
        backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'
      },
    }
  }));

  // Calling AppBar Styles and Collapse Theme
  const classes = useStyles();
  const theme = useTheme();

  // Dropdown Menu Functions
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Misc. Inline Styles
  const logo = {
    color: 'black',
    textDecoration: 'none',
    border: '3px solid black',
    padding:'3px 3px 3px 3px', 
    fontWeight:'bold', 
    fontSize:'14px',
    letterSpacing: '.1em'
  }

  return (
    <div className='nav'>
      <AppBar className={classes.appbar} position='static'>
        <Toolbar>
          <IconButton className={classes.collapse} color='inherit' edge='start' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>

          <Grid container>
            {/* Categories */}
            <Grid item container xs={3} md={5} className={classes.noCollapse}>
              <ul className='menu'>
                <li className='clothes'>
                  <Link to='/finery/clothes'>CLOTHES</Link>
                  <ul className='dropdown'>
                      <Link to='/finery/clothes/tops'><li className='dropdownLinks'>TOPS</li></Link>
                      <Link to='/finery/clothes/bottoms'><li className='dropdownLinks'>BOTTOMS</li></Link>
                      <Link to='/finery/clothes/outer'><li className='dropdownLinks'>OUTER</li></Link>
                  </ul>
                </li>
                <li className='shoes'>
                  <Link to='/finery/shoes'>SHOES</Link>
                  <ul className='dropdown'>
                      <Link to='/finery/shoes/boots'><li className='dropdownLinks'>BOOTS</li></Link>
                      <Link to='/finery/shoes/heels'><li className='dropdownLinks'>HEELS</li></Link>
                      <Link to='/finery/shoes/sneakers'><li className='dropdownLinks'>SNEAKERS</li></Link>
                  </ul>
                </li>
                <li className='accessories'>
                  <Link to='/finery/accessories'>ACCESSORIES</Link>
                  <ul className='dropdown'>
                      <Link to='/finery/accessories/bags'><li className='dropdownLinks'>BAGS</li></Link>
                  </ul>
                </li>
              </ul> 
            </Grid>
            {/* Logo */}
            <Grid item container xs={11} sm={12} md={2} justify='center'>
              <h5><Link to='/finery' style={logo}>FINERY</Link></h5>
            </Grid>
            {/* Dashboard */}
            <Grid item container md={5} className={classes.noCollapse}>
            <ul className='menu'>
              <li><Link to='/finery/search'>SEARCH</Link></li>
              <li><Link to='/finery/account'>SIGN IN/UP</Link></li>
              <li><Link to='/finery/cart'>CART</Link></li>
            </ul> 
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer anchor='top' open={open}>
        <Grid container>
          <Grid item xs={1}> 
            <IconButton onClick={handleDrawerClose} color='inherit' style={{marginTop:'10px',marginLeft:'10px'}}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Grid>
          <Grid item container xs={10} justify='center'>
            <h5><Link to='/finery' style={logo}>FINERY</Link></h5>
          </Grid>
        </Grid>

        <List>
          <ListItem><Link to='/finery/clothes' className={classes.listItem}>CLOTHES</Link></ListItem>
          <ListItem><Link to='/finery/clothes/tops' className={classes.listItems}>tops</Link></ListItem>
          <ListItem><Link to='/finery/clothes/bottoms' className={classes.listItems}>bottoms</Link></ListItem>
          <ListItem><Link to='/finery/clothes/outer' className={classes.listItems}>outer</Link></ListItem>
        </List>
        <List>
          <ListItem><Link to='/finery/shoes' className={classes.listItem}>SHOES</Link></ListItem>
          <ListItem><Link to='/finery/shoes/boots' className={classes.listItems}>boots</Link></ListItem>
          <ListItem><Link to='/finery/shoes/heels' className={classes.listItems}>heels</Link></ListItem>
          <ListItem><Link to='/finery/shoes/sneakers' className={classes.listItems}>sneakers</Link></ListItem>
        </List>
        <List>
          <ListItem><Link to='/finery/accessories' className={classes.listItem}>ACCESSORIES</Link></ListItem>
          <ListItem><Link to='/finery/accessories/bags' className={classes.listItems}>bags</Link></ListItem>
        </List>
        <List>
          <ListItem><Link to='/finery/search' className={classes.listItem}>SEARCH</Link></ListItem>
          <ListItem><Link to='/finery/account' className={classes.listItem}>SIGN IN/UP</Link></ListItem>
          <ListItem><Link to='/finery/cart' className={classes.listItem}>CART</Link></ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Nav;