import React from 'react';
import Grid from '@material-ui/core/Grid';
import Mini from '../../images/Mini.png';
import Form from '../../images/Form.png';
import Tote from '../../images/Tote.png';
import Backpack from '../../images/Backpack.png';
import Transit from '../../images/Transit.png';
import Case from '../../images/Case.png';

function Clothes() {
    return(
        <Grid container style={{textAlign:'center'}}>
            <Grid item xs={6} md={4}><img src={Mini} alt={Mini} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Form} alt={Form} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Tote} alt={Tote} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Transit} alt={Transit} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Case} alt={Case} style={{width:'90%'}} /></Grid>
            <Grid item xs={6} md={4}><img src={Backpack} alt={Backpack} style={{width:'90%'}} /></Grid>
        </Grid>
    );
}

export default Clothes;