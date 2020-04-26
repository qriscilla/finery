import React from 'react';
import Grid from '@material-ui/core/Grid';
import Storefront1 from '../../images/Storefront1.png';
import Storefront2 from '../../images/Storefront2.png';
import Turtleneck from '../../images/Turtleneck.png';
import Rain from '../../images/Rain.png';
import Mini from '../../images/Mini.png';
import { Link } from 'react-router-dom';

function Home() {

    return(
        <Grid container style={{textAlign:'center'}}>

            {/* Storefront */}
            <Grid item container>
                <Grid item container style={{position:'relative', backgroundSize: "contain", backgroundRepeat:'no-repeat'}}>
                    <Grid item xs={12} md={6}>
                        <img src={Storefront1} alt={Storefront1} style={{width:'100%'}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={Storefront2} alt={Storefront2} style={{width:'100%'}} />                
                    </Grid>
                </Grid>
                <p style={{position:'absolute',top:'35%',width:'100%',fontSize:'7vw',color:'rgb(230,230,230)',fontWeight:'bold'}}>Modern basics for lifewear</p>                
            </Grid>

            {/* Cards */}
            <Grid item container style={{marginTop:'20px'}}>
                {/* <Grid item xs={12} sm={4} style={{backgroundImage:`url(${Turtleneck})`, backgroundSize:'contain'}}>
                    <p style={{position:'absolute',fontSize:'30px',color:'rgb(230,230,230)',fontWeight:'bold'}}>clothes</p>                
                </Grid> */}
                <Grid item xs={12} sm={4}>
                    <Link to='/finery/clothes' style={{textDecoration:'none'}}>
                        <img src={Turtleneck} alt={Turtleneck} style={{width:'90%'}} />
                        <p style={{fontSize:'30px',color:'rgb(230,230,230)',fontWeight:'bold',marginTop:'-50px'}}>clothes</p>        
                    </Link>
        
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Link to='/finery/shoes' style={{textDecoration:'none'}}>
                        <img src={Rain} alt={Rain} style={{width:'90%'}} />
                        <p style={{fontSize:'30px',color:'rgb(230,230,230)',fontWeight:'bold',marginTop:'-50px'}}>shoes</p>           
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Link to='/finery/accessories' style={{textDecoration:'none'}}>
                        <img src={Mini} alt={Mini} style={{width:'90%'}} />
                        <p style={{fontSize:'30px',color:'rgb(230,230,230)',fontWeight:'bold',marginTop:'-50px'}}>accessories</p>       
                    </Link>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default Home;