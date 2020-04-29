import React from 'react';
import Grid from '@material-ui/core/Grid';
import Heel from '../../images/Heel.png';
import Rain from '../../images/Rain.png';
import Clog from '../../images/Clog.png';
import Sneaker from '../../images/Sneaker.png';
import ReKnit from '../../images/ReKnit.png';
import Sandal from '../../images/Sandal.png';

function Clothes() {
    return(
        <Grid container style={{textAlign:'center'}}>
            <Grid item xs={6} md={4}><img src={Rain} alt={Rain} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Heel} alt={Heel} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Clog} alt={Clog} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Sneaker} alt={Sneaker} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={ReKnit} alt={ReKnit} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Sandal} alt={Sandal} style={{width:'90%'}} /></Grid>
        </Grid>
    );
}

export default Clothes;