import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import twig from '../images/twig.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'black',
    background: 'transparent',
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

            <Grid container>
                <Grid item container xs={3} sm={4} style={{textAlign:'right'}}>
                    <h5 className={classes.title}>clothing</h5>
                    <h5 className={classes.title}>shoes</h5>
                    <h5 className={classes.title}>accessories</h5>
                </Grid>
                <Grid item xs={4} sm={4} style={{textAlign:'center'}}>
                    <h3><img src={twig} alt={twig} style={{width:'25px', position:'block'}} />finery</h3>
                </Grid>
                <Grid item container sm={4}>
                    <h5 className={classes.title}>search</h5>
                    <h5 className={classes.title}>log in / sign up</h5>
                    <h5 className={classes.title}>cart</h5>
                </Grid>
            </Grid>

        </Toolbar>
      </AppBar>
  );
}

// import React from 'react';
// import Grid from '@material-ui/core/Grid';

// function Nav() {
//     return(
//         <Grid container>

//             <Grid item container xs={5} sm={4} justify='flex-end' alignContent='center'>
//                 <h5 className='nav__tab'>clothing</h5>
//                 <h5 className='nav__tab'>shoes</h5>
//                 <h5 className='nav__tab'>accessories</h5>
//             </Grid>

//             <Grid item xs={2} sm={4} style={{textAlign:'center'}}>
//                 <h3>finery</h3>
//             </Grid>

//             <Grid item xs={5} container sm={4} justify='flex-start' alignContent='center'>
//                 <h5 className='nav__tab'>search</h5>
//                 <h5 className='nav__tab'>log in</h5>
//                 <h5 className='nav__tab'>cart</h5>
//             </Grid>

//         </Grid>
//     );
// }

// export default Nav;