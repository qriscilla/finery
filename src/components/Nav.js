import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import twig from '../images/twig.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appbar: {
    flexGrow: 1,
    color: 'black',
    background: 'transparent',
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Grid container>
              <Grid item container xs={3} sm={4} style={{textAlign:'right'}}>
                <h5 className={classes.title}><Link to='/finery/clothes' style={{color:'black',textDecoration:'none'}}>clothes</Link></h5>
                <h5 className={classes.title}><Link to='/finery/shoes' style={{color:'black',textDecoration:'none'}}>shoes</Link></h5>
                <h5 className={classes.title}><Link to='/finery/accessories' style={{color:'black',textDecoration:'none'}}>accessories</Link></h5>
              </Grid>
              <Grid item xs={4} sm={4} style={{textAlign:'center'}}>
                <h3><Link to='/finery' style={{color:'black',textDecoration:'none'}}><img src={twig} alt={twig} style={{width:'25px', position:'block'}} />finery</Link></h3>
              </Grid>
              <Grid item container sm={4}>
                <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none'}}>search</Link></h5>
                <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none'}}>sign in / up</Link></h5>
                <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none'}}>cart</Link></h5>
              </Grid>
          </Grid>

        </Toolbar>

      </AppBar>

      <Drawer
        anchor="top"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem>
            <Link to='/finery/clothes' style={{color:'black',textDecoration:'none'}}>clothes</Link>
          </ListItem>
          <ListItem>
            <Link to='/finery/shoes' style={{color:'black',textDecoration:'none'}}>shoes</Link>
          </ListItem>
          <ListItem>
            <Link to='/finery/accessories' style={{color:'black',textDecoration:'none'}}>accessories</Link>
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem>
            <Link to='/finery' style={{color:'black',textDecoration:'none'}}>search</Link>
          </ListItem>
          <ListItem>
            <Link to='/finery' style={{color:'black',textDecoration:'none'}}>log in / sign up</Link>
          </ListItem>
          <ListItem>
            <Link to='/finery' style={{color:'black',textDecoration:'none'}}>cart</Link>
          </ListItem>
        </List>
      </Drawer>

    </div>
  );
}