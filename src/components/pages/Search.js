import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

// Styles
const input = {
    fontSize:'40px',
    outline:'none',
    border:'none',
    borderBottom:'4px solid black',
    marginRight:'10px',
    textTransform:'uppercase',
    fontWeight:'500',
    letterSpacing:'2px',
    width: '50vw'
}
const button = {
    fontSize:'50px',
    backgroundColor:'transparent',
    border:'none',
}
const icon = {
    transform: 'scale(2)',
    marginLeft: '10px',
    color: 'black',
    cursor: 'pointer'
}

function Search() {
    return (
        <Grid container xs={12} justify='center'>
            <Grid item container alignItems='flex-start' justify='center'>
                <input type='input' style={input}></input>
                <button style={button}>
                    <SearchIcon style={icon} />
                </button>
            </Grid>
        </Grid>
    );
}

export default Search;