import React from 'react';
import Grid from '@material-ui/core/Grid';
import Storefront1 from '../../images/Storefront1.png';
import Storefront2 from '../../images/Storefront2.png';

function Home() {
    return(
        <Grid container style={{textAlign:'center'}}>
            <Grid item xs={12} md={6}>
                <img src={Storefront1} alt={Storefront1} style={{width:'100%'}} />
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={Storefront2} alt={Storefront2} style={{width:'100%'}} />                
            </Grid>
        </Grid>
    );
}

export default Home;