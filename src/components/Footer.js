import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

function Footer() {
    const footer = {
        fontSize: '11px',
        fontWeight: 'bold',
    }
    const portfolio = {
        color: 'black',
        textDecoration: 'none',
        backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'
    }

    return(
        <Grid item container justify='center' style={footer} className='footer'>

            <Grid item container xs={12} sm={6} justify='center' style={{marginLeft:'-40px'}}>
                <Grid item>
                    <ul className='footer__ul'>
                        <li className='footer__li'>OUR LOCATION</li>
                        <li>CENTER CITY</li>
                        <li>PHILADELPHIA, PA</li>
                    </ul>
                </Grid>
                <Grid item>
                    <ul className='footer__ul'>
                        <li className='footer__li'>FIND US ON</li>
                        <li><Link to='/finery' className='footer__link'>INSTAGRAM</Link></li>
                        <li><Link to='/finery' className='footer__link'>FACEBOOK</Link></li>
                    </ul>
                </Grid>
                <Grid item>
                    <ul className='footer__ul'>
                        <li className='footer__li'>INFORMATION</li>
                        <li><Link to='/finery' className='footer__link'>ABOUT</Link></li>
                        <li><Link to='/finery' className='footer__link'>CONTACT</Link></li>
                    </ul>
                </Grid>
            </Grid>

            <Grid xs={12} sm={6} item container justify='center'>
                <div style={{lineHeight:'6px', marginTop:'10px'}}>
                    <p>WEBSITE DESIGNED AND DEVELOPED BY{" "}<a href='https://priwhang.com/' target='_blank' rel="noopener noreferrer" style={portfolio}>PRISCILLA WHANG</a></p>
                    <p>ALL ITEMS CURATED FROM{" "}<a href='https://www.everlane.com/' target='_blank' rel="noopener noreferrer" style={portfolio}>EVERLANE</a></p>
                </div>

                {/* <ul className='footer__ul'>
                    <li><p>WEBSITE DESIGNED AND DEVELOPED BY{" "}<a href='https://priwhang.com/' target='_blank' rel="noopener noreferrer" style={portfolio}>PRISCILLA WHANG</a></p></li>
                    <li><p>ALL ITEMS CURATED FROM{" "}<a href='https://www.everlane.com/' target='_blank' rel="noopener noreferrer" style={portfolio}>EVERLANE</a></p></li>
                </ul> */}
            </Grid>

        </Grid>
    );
}

export default Footer;