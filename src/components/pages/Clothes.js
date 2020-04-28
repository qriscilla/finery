import React from 'react';
import Grid from '@material-ui/core/Grid';
import Turtleneck from '../../images/Turtleneck.png';
import Cashmere from '../../images/Cashmere.png';
import Jacket from '../../images/Jacket.png';
import Straight from '../../images/Straight.png';
import Cheeky from '../../images/Cheeky.png';

function Clothes() {
    return(
        <Grid container style={{textAlign:'center'}}>
            <Grid item xs={6} md={4}><img src={Cashmere} alt={Cashmere} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Turtleneck} alt={Turtleneck} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Jacket} alt={Jacket} style={{width:'90%'}} /></Grid>   
            <Grid item xs={6} md={4}><img src={Straight} alt={Straight} style={{width:'90%'}} /></Grid>   
            <Grid item xs={6} md={4}><img src={Cheeky} alt={Cheeky} style={{width:'90%'}} /></Grid>   
        </Grid>
    );
}

export default Clothes;