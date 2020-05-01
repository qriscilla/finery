import React from 'react';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Link } from 'react-router-dom';

function Cart() {

    return (

        <Grid container alignItems='flex-start'>

            <Grid item container xs={12} md={8} justify='center'>
                <Grid item style={{fontWeight:'bold',fontSize:'14px',textAlign:'center'}}>
                    <p>YOU HAVE NO ITEMS IN YOUR CART.</p>
                    <Link style={{fontSize:'20px',color:'black',textDecoration:'none',backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>SHOP NOW</Link>
                </Grid>
            </Grid>

            <Grid item container xs={12} md={4} justify='center'>
                <TableContainer style={{border:'2px solid black',width:'300px'}}>
                    <Table>
                        <TableHead>
                            <TableRow style={{borderBottom:'2px solid black'}}>
                                <TableCell align="center" colSpan={3} style={{fontWeight:'bold'}}>ORDER SUMMARY</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow style={{borderBottom:'2px solid black'}}>
                                <TableCell style={{fontWeight:'bold'}}>SUBTOTAL</TableCell>
                                <TableCell align="right" style={{fontWeight:'bold'}}>$0</TableCell>
                            </TableRow>
                            <TableRow style={{borderBottom:'2px solid black'}}>
                                <TableCell style={{fontWeight:'bold'}}>SHIPPING</TableCell>
                                <TableCell align="right" style={{fontWeight:'bold'}}>FREE</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{fontWeight:'bold'}}>TOTAL</TableCell>
                                <TableCell align="right" style={{fontWeight:'bold'}}>$0</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>   
                    <button style={{width:'100%',height:'50px',cursor:'pointer',outline:'none',backgroundColor:'black',color:'white',fontWeight:'bold',fontSize:'14px',border:'2px solid black'}}>PROCEED TO CHECKOUT</button>
                </TableContainer>
            </Grid>

        </Grid>

        // <Grid container xs={12} style={{margin:'20px'}}>
        //     <Grid item xs={12} md={9} style={{fontWeight:'bold',fontSize:'14px',textAlign:'center'}}>
        //         <p>YOU HAVE NO ITEMS IN YOUR CART.</p>
        //         <Link style={{fontSize:'20px',color:'black',textDecoration:'none',backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>SHOP NOW</Link>
        //     </Grid>

        //     <Grid item xs={12} md={3}>
           
                // <TableContainer style={{border:'2px solid black'}}>
                //     <Table>
                //         <TableHead>
                //             <TableRow style={{borderBottom:'2px solid black'}}>
                //                 <TableCell align="center" colSpan={3} style={{fontWeight:'bold'}}>ORDER SUMMARY</TableCell>
                //             </TableRow>
                //         </TableHead>
                //         <TableBody>
                //             <TableRow style={{borderBottom:'2px solid black'}}>
                //                 <TableCell style={{fontWeight:'bold'}}>SUBTOTAL</TableCell>
                //                 <TableCell align="right" style={{fontWeight:'bold'}}>$0</TableCell>
                //             </TableRow>
                //             <TableRow style={{borderBottom:'2px solid black'}}>
                //                 <TableCell style={{fontWeight:'bold'}}>SHIPPING</TableCell>
                //                 <TableCell align="right" style={{fontWeight:'bold'}}>FREE</TableCell>
                //             </TableRow>
                //             <TableRow>
                //                 <TableCell style={{fontWeight:'bold'}}>TOTAL</TableCell>
                //                 <TableCell align="right" style={{fontWeight:'bold'}}>$0</TableCell>
                //             </TableRow>
                //         </TableBody>
                //     </Table>   
                //     <button style={{width:'100%',height:'50px',cursor:'pointer',outline:'none',backgroundColor:'black',color:'white',fontWeight:'bold',fontSize:'14px',border:'2px solid black'}}>PROCEED TO CHECKOUT</button>
                // </TableContainer>

        //     </Grid>

        // </Grid>
    );
}

export default Cart;