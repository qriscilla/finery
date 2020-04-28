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
    fontSize: '12px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  large: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  }
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

            {/* Categories */}
            <Grid item container xs={3} sm={5} className={classes.large}>
              <ul className="menu">
                <li>
                  <div className="menu-category"><Link to="/finery/clothes">Clothing</Link></div>
                  <ul className="dropdown">
                      <li className="sublink"><Link to="/finery/clothes/tops">Tops</Link></li>
                      <li className="sublink"><Link to="/finery/clothes/bottoms">Bottoms</Link></li>
                      <li className="sublink"><Link to="/finery/clothes/outer">Outer</Link></li>
                  </ul>
                </li>
                <li>
                  <div className="menu-category"><Link to="/finery/shoes">Shoes</Link></div>
                  <ul className="dropdown">
                      <li className="sublink"><Link to="/finery/shoes/boots">Boots</Link></li>
                      <li className="sublink"><Link to="/finery/shoes/heels">Heels</Link></li>
                  </ul>
                </li>
                <li>
                  <div className="menu-category"><Link to="/finery/accessories">Accessories</Link></div>
                  <ul className="dropdown">
                      <li className="sublink"><Link to="/finery/accessories/bags">Bags</Link></li>
                  </ul>
                </li>
              </ul> 
            </Grid>

            {/* Logo */}
            <Grid item container xs={11} sm={2} style={{textAlign:'center'}}>
              <h5 style={{flexGrow:'1',fontSize:'12px',display:'block'}}><Link to='/finery' style={{color:'black',textDecoration:'none',border:'2px solid black',padding:'3px 3px 3px 3px'}}>FINERY</Link></h5>
            </Grid>

              <Grid item container sm={5} className={classes.large}>
              <ul className="menu">
                <li>
                  <div className="menu-category"><Link to="/">SEARCH</Link></div>
                </li>
                <li>
                  <div className="menu-category"><Link to="/">SIGN IN/UP</Link></div>
                </li>
                <li>
                  <div className="menu-category"><Link to="/">CART</Link></div>
                </li>
              </ul> 
              </Grid>

              {/* <Grid item container xs={3} sm={4} style={{textAlign:'right'}}>
                <h5 className={classes.title}><Link to='/finery/clothes' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>CLOTHES</Link></h5>
                <h5 className={classes.title}><Link to='/finery/shoes' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>SHOES</Link></h5>
                <h5 className={classes.title}><Link to='/finery/accessories' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>ACCESSORIES</Link></h5>
              </Grid>
              <Grid item container xs={11} sm={4} style={{textAlign:'center'}}>
                <h5 style={{flexGrow:'1',fontSize:'12px',display:'block'}}><Link to='/finery' style={{color:'black',textDecoration:'none',border:'2px solid black',padding:'3px 3px 3px 3px'}}>FINERY</Link></h5>
              </Grid>
              <Grid item container sm={4}>
                <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>SEARCH</Link></h5>
                <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>SIGN IN / UP</Link></h5>
                <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>CART</Link></h5>
              </Grid> */}
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

// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import { Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// // Styling
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appbar: {
//     flexGrow: 1,
//     color: 'black',
//     background: 'transparent',
//     boxShadow: 'none'
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('md')]: {
//         display: 'none',
//     },
//   },
//   title: {
//     flexGrow: 1,
//     fontSize: '12px',
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'block',
//     },
//   },
// }));

// export default function PersistentDrawerLeft() {

//   // Collapsing Appbar
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   // Opening / Closing Category Menu
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className={classes.root}>

//       <AppBar position="static" className={classes.appbar}>
//         <Toolbar>

//           {/* Collapse Icon */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className={classes.menuButton}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Grid container>

//               {/* Categories + Menu Items */}
//               <Grid item container xs={3} sm={4} style={{textAlign:'right'}}>

//                 {/* Clothes */}
//                 <h5 className={classes.title}>
//                   <Link aria-controls="clothes" aria-haspopup="true" onClick={handleClick} style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>
//                     CLOTHES
//                   </Link>
//                 </h5>
//                 <Menu
//                   id="clothes"
//                   anchorEl={anchorEl}
//                   keepMounted
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 >
//                   <MenuItem>      
//                     <h5><Link to='/finery/clothes/tops' style={{color:'black',textDecoration:'none'}}>TOPS</Link></h5>
//                   </MenuItem>
//                   <MenuItem>
//                     <h5><Link to='/finery/clothes/bottoms' style={{color:'black',textDecoration:'none'}}>BOTTOMS</Link></h5>
//                   </MenuItem>
//                   <MenuItem>
//                     <h5><Link to='/finery/clothes/outer' style={{color:'black',textDecoration:'none'}}>OUTER LAYERS</Link></h5>
//                   </MenuItem>
//                   <MenuItem>
//                     <h5><Link to='/finery/clothes' style={{color:'black',textDecoration:'none'}}>SEE ALL CLOTHES</Link></h5>
//                   </MenuItem>
//                 </Menu>

//                 {/* Shoes */}
//                 <h5 className={classes.title}>
//                   <Link aria-controls="shoes" aria-haspopup="true" onClick={handleClick} style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>
//                     SHOES
//                   </Link>
//                 </h5>
//                 <Menu
//                   id="shoes"
//                   anchorEl={anchorEl}
//                   keepMounted
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 >
//                   <MenuItem>      
//                     <h5><Link to='/finery/shoes/heels' style={{color:'black',textDecoration:'none'}}>HEELS</Link></h5>
//                   </MenuItem>
//                   <MenuItem>
//                     <h5><Link to='/finery/shoes/boots' style={{color:'black',textDecoration:'none'}}>BOOTS</Link></h5>
//                   </MenuItem>
//                   <MenuItem>
//                     <h5><Link to='/finery/shoes' style={{color:'black',textDecoration:'none'}}>SEE ALL SHOES</Link></h5>
//                   </MenuItem>
//                 </Menu>

//                 {/* Accessories */}
//                 <h5 className={classes.title}>
//                   <Link aria-controls="accessories" aria-haspopup="true" onClick={handleClick} style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>
//                     ACCESSORIES
//                   </Link>
//                 </h5>
//                 <Menu
//                   id="accessories"
//                   anchorEl={anchorEl}
//                   keepMounted
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 >
//                   <MenuItem>      
//                     <h5><Link to='/finery/accessories/handbags' style={{color:'black',textDecoration:'none'}}>HANDBAGS</Link></h5>
//                   </MenuItem>
//                   <MenuItem>
//                     <h5><Link to='/finery/accessories/backpacks' style={{color:'black',textDecoration:'none'}}>BACKPACKS</Link></h5>
//                   </MenuItem>
//                   <MenuItem>
//                     <h5><Link to='/finery/accessories' style={{color:'black',textDecoration:'none'}}>SEE ALL ACCESSORIES</Link></h5>
//                   </MenuItem>
//                 </Menu>

//               </Grid>

//               {/* Store name */}
//               <Grid item container xs={10} sm={4} style={{textAlign:'center'}}>
//                 <h5 style={{flexGrow:'1',fontSize:'12px',display:'block'}}><Link to='/finery' style={{color:'black',textDecoration:'none',border:'2px solid black',padding:'3px 3px 3px 3px'}}>FINERY</Link></h5>
//               </Grid>

//               {/* Search, Sign In/Up, Cart */}
//               <Grid item container sm={4}>
//                 <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>SEARCH</Link></h5>
//                 <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>SIGN IN / UP</Link></h5>
//                 <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>CART</Link></h5>
//               </Grid>
//           </Grid>

//         </Toolbar>

//       </AppBar>

//       <Drawer
//         anchor="top"
//         open={open}
//       >
//         <div>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </div>

//         <Divider />

//         <List>
//           <ListItem>
//             <Link to='/finery/clothes' style={{color:'black',textDecoration:'none'}}>clothes</Link>
//           </ListItem>
//           <ListItem>
//             <Link to='/finery/shoes' style={{color:'black',textDecoration:'none'}}>shoes</Link>
//           </ListItem>
//           <ListItem>
//             <Link to='/finery/accessories' style={{color:'black',textDecoration:'none'}}>accessories</Link>
//           </ListItem>
//         </List>

//         <Divider />

//         <List>
//           <ListItem>
//             <Link to='/finery' style={{color:'black',textDecoration:'none'}}>search</Link>
//           </ListItem>
//           <ListItem>
//             <Link to='/finery' style={{color:'black',textDecoration:'none'}}>log in / sign up</Link>
//           </ListItem>
//           <ListItem>
//             <Link to='/finery' style={{color:'black',textDecoration:'none'}}>cart</Link>
//           </ListItem>
//         </List>
//       </Drawer>

//     </div>
//   );
// }