import React from 'react';
import Grid from '@material-ui/core/Grid';
import Storefront1 from '../../images/Storefront1.png';
import Storefront2 from '../../images/Storefront2.png';
import Turtleneck from '../../images/Turtleneck.png';
import Rain from '../../images/Rain.png';
import Mini from '../../images/Mini.png';
import { Link } from 'react-router-dom';

// Styling: Home
const home = {
    textAlign: 'center'
}

// Styling: Storefront
const storefront = {
    position: 'relative',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
}
const storefrontImage= {
    width: '100%'
}
const storefrontOverlay = {
    position: 'absolute',
    top: '35%',
    width: '100%',
    fontSize: '7vw',
    color: 'rgb(230,230,230)',
    fontWeight: 'bold'
}

// Styling: Category
const categories = {
    marginTop: '20px'
}
const categoryLink = {
    textDecoration: 'none'
}
const categoryImage = {
    width: '90%'
}
const categoryP = {
    fontSize: '1.9rem',
    fontWeight: 'bold',
    marginTop: '-50px',
    color: 'rgb(230,230,230)'
}
const categorySpan = {
    backgroundColor: 'black'
}

function Home() {

    return(
        <Grid container className='home' style={home}>

            {/* Storefront */}
            <Grid item container style={storefront}>
                <Grid item xs={12} md={6}>
                    <img src={Storefront1} alt={Storefront1} style={storefrontImage} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={Storefront2} alt={Storefront2} style={storefrontImage} />                
                </Grid>
            </Grid>
            <p style={storefrontOverlay}>Modern basics for lifewear</p>                

            {/* Categories */}
            <Grid item container style={categories}>
                <Grid item xs={12} sm={4}>
                    <Link to='/finery/clothes' style={categoryLink}>
                        <img src={Turtleneck} alt={Turtleneck} style={categoryImage}/>
                        <p style={categoryP}><span style={categorySpan}>clothes</span></p>    
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Link to='/finery/shoes' style={categoryLink}>
                        <img src={Rain} alt={Rain} style={categoryImage}/>
                        <p style={categoryP}><span style={categorySpan}>shoes</span></p>           
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Link to='/finery/accessories' style={categoryLink}>
                        <img src={Mini} alt={Mini} className='categoryImage' style={categoryImage}/>
                        <p style={categoryP}><span style={categorySpan}>accessories</span></p>       
                    </Link>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default Home;