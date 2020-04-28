import React from 'react';
import Grid from '@material-ui/core/Grid';
import Mini from '../../images/Mini.png';
import Backpack from '../../images/Backpack.png';

function Clothes() {
    return(
        <Grid container style={{textAlign:'center'}}>
            <Grid item xs={6} md={4}><img src={Mini} alt={Mini} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Backpack} alt={Backpack} style={{width:'90%'}} /></Grid>
        </Grid>
    );
}

export default Clothes;