import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Link } from 'react-router-dom'; 
import { addQuantity, removeQuantity, removeItem } from '../../actions/actions';

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

const mapStateToProps = (state) => {
    return {
        items: state.cart,
        subTotal: state.subTotal,
        cartTotal: state.cartTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuantity: (id) => {dispatch(addQuantity(id))},
        removeQuantity: (id) => {dispatch(removeQuantity(id))},
        removeItem: (id) => {dispatch(removeItem(id))}
    }
}

class Cart extends React.Component {
    // Increase item quantity
    handleAddQuantity = ({id}) => {
        this.props.addQuantity(id);
    }

    // Decrease item quantity
    handleMinusQuantity = ({id, quantity}) => {
        if (quantity > 0)
            this.props.removeQuantity(id);
    }

    // Remove item
    handleRemoveItem = ({id}) => {
        this.props.removeItem(id);
    }

    render() {

        let cartItems = this.props.items.length 
            ? (
                this.props.items.map(item => {
                    return (
                        <Grid items>
                            <TableContainer>
                                <Table>
                                    <TableBody>
                                        <TableRow style={{borderBottom: '2px solid black'}}>
                                            <TableCell style={{width:'60%'}}><img src={item.img} alt={item.title} style={{width:'100%'}} /></TableCell>
                                            <TableCell style={tableCell}>
                                                <ul style={{listStyleType:'none'}}>
                                                    <li>${item.price}</li>
                                                    <li><button onClick={ () => {this.handleAddQuantity(item)} }>+</button></li>
                                                    <li><button onClick={ () => {this.handleMinusQuantity(item)} }>-</button></li>
                                                    <li>QTY:{item.quantity}</li>
                                                    <li><button onClick={ () => {this.handleRemoveItem(item)} }>REMOVE ITEM</button></li>
                                                </ul>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>   
                            </TableContainer>                              
                        </Grid>
                    )
                })
            )
            : (
                <Grid item style={cart}>
                    <p>YOU HAVE NO ITEMS IN YOUR CART.</p>
                    <Link to='/finery' style={shopLink}>SHOP NOW</Link>
                </Grid>
            )

        return (
            <Grid container justify='center'>
                <Grid item xs={12} md={4} alignItems='flex-start' style={{borderTop:'2px solid black'}}>
                    {cartItems}
                </Grid>
                <Grid item container xs={12} md={4} justify='center' alignItems='flex-start'>
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
                                    <TableCell align="right" style={tableCell}>${this.props.subTotal}</TableCell>
                                </TableRow>
                                <TableRow style={rowBorder}>
                                    <TableCell style={tableCell}>SHIPPING</TableCell>
                                    <TableCell align="right" style={tableCell}>FREE</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={tableCell}>TOTAL</TableCell>
                                    <TableCell align="right" style={tableCell}>${this.props.cartTotal}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>   
                        <button style={button}>PROCEED TO CHECKOUT</button>
                    </TableContainer>
                </Grid>
            </Grid>
        );
    }
}

// export default Cart;
export default connect(mapStateToProps, mapDispatchToProps)(Cart);