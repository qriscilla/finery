import React from 'react';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Link } from 'react-router-dom'; 

// Styles
const cart = {
    fontWeight:'bold',
    fontSize:'14px',
    textAlign:'center'
}
const shopLink = {
    fontSize:'20px',
    color:'black',
    textDecoration:'none',
    backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'
}
const tableContainer = {
    border: '2px solid black',
    width: '300px'
}
const rowBorder = {
    borderBottom: '2px solid black',
}
const tableCell = {
    fontWeight: 'bold'
}
const button = {
    width:'100%',
    height:'50px',
    cursor:'pointer',
    outline:'none',
    backgroundColor:'black',
    color:'white',
    fontWeight:'bold',
    fontSize:'14px',
    border:'2px solid black'
}

function Cart() {
    return (
        <Grid container alignItems='flex-start'>
            <Grid item container xs={12} md={8} justify='center'>
                <Grid item style={cart}>
                    <p>YOU HAVE NO ITEMS IN YOUR CART.</p>
                    <Link style={shopLink}>SHOP NOW</Link>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={4} justify='center'>
                <TableContainer style={tableContainer}>
                    <Table>
                        <TableHead>
                            <TableRow style={rowBorder}>
                                <TableCell align="center" colSpan={3} style={tableCell}>ORDER SUMMARY</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow style={rowBorder}>
                                <TableCell style={tableCell}>SUBTOTAL</TableCell>
                                <TableCell align="right" style={tableCell}>$0</TableCell>
                            </TableRow>
                            <TableRow style={rowBorder}>
                                <TableCell style={tableCell}>SHIPPING</TableCell>
                                <TableCell align="right" style={tableCell}>FREE</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={tableCell}>TOTAL</TableCell>
                                <TableCell align="right" style={tableCell}>$0</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>   
                    <button style={button}>PROCEED TO CHECKOUT</button>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default Cart;