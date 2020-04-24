import React from 'react';

import Grid from '@material-ui/core/Grid';

function Nav() {
    return(
        <Grid container>

            <Grid item container xs={3} sm={4} justify='flex-end' alignContent='center'>
                <h5 className='nav__tab'>clothing</h5>
                <h5 className='nav__tab'>shoes</h5>
                <h5 className='nav__tab'>accessories</h5>
            </Grid>

            <Grid item xs={3} sm={4} style={{textAlign:'center'}}>
                <h3>finery</h3>
            </Grid>

            <Grid item xs={3} container sm={4} justify='flex-start' alignContent='center'>
                <h5 className='nav__tab'>search</h5>
                <h5 className='nav__tab'>log in</h5>
                <h5 className='nav__tab'>cart</h5>
            </Grid>

        </Grid>
    );
}

export default Nav;