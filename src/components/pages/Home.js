import React from 'react';
import Grid from '@material-ui/core/Grid';
import storefront1 from '../../images/storefront1.png';
import storefront2 from '../../images/storefront2.png';

function Home() {
    return(
        <Grid container style={{textAlign:'center'}}>
            <Grid item xs={12} md={6}>
                <img src={storefront1} alt={storefront1} style={{width:'100%'}} />
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={storefront2} alt={storefront2} style={{width:'100%'}} />                
            </Grid>
        </Grid>
    );
}

export default Home;