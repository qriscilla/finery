import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    return (
        <Grid container xs={12} justify='center'>
            <Grid item container alignItems='flex-start' justify='center'>
                <input type='input' style={{fontSize:'40px',outline:'none',border:'none',borderBottom:'4px solid black',marginRight:'10px',textTransform:'uppercase',fontWeight:'500',letterSpacing:'2px'}}></input>
                <button style={{fontSize:'50px',backgroundColor:'transparent',border:'none'}}>
                    <SearchIcon style={{transform:'scale(2)',marginLeft:'10px',color:'black',cursor:'pointer'}} />
                </button>
            </Grid>
        </Grid>
    );
}

export default Search;