import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default function NavPractice() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <h5><Link to='/finery/clothes' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>CLOTHES</Link></h5>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>      
          <h5><Link to='/finery/clothes' style={{color:'black',textDecoration:'none',backgroundImage:'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>CLOTHES</Link></h5>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}