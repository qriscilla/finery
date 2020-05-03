import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Link } from 'react-router-dom'; 
import { addQuantity, removeQuantity, removeItem } from '../../actions/actions';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { withStyles } from "@material-ui/core/styles";
import MuiTableCell from "@material-ui/core/TableCell";
// import { makeStyles, useTheme } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     scroll: {
//         [theme.breakpoints.up('md')]: {
//             position:'fixed',
//             width:'300px'
//         },
//     },
// }));


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
// const tableContainer = {
//     border: '2px solid black',
//     width: '300px'
// }
// const rowBorder = {
//     borderBottom: '2px solid black',
// }
// const tableCell = {
//     fontWeight: 'bold'
// }
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

const TableCell = withStyles({
    root: {
      borderBottom: "none"
    }
  })(MuiTableCell);

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

                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{width:'50%'}}>
                                            <img src={item.img} alt={item.title} style={{width:'100%'}} />
                                        </TableCell>
                                        <TableCell>
                                            <ul style={{listStyleType:'none', textAlign:'center',padding:'0px',fontWeight:'bold'}}>
                                                <li style={{textTransform:'uppercase',fontSize:'14px'}}><span style={{backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'}}>{item.title}</span></li>
                                                <li style={{marginBottom:'40px'}}>${item.price}</li>
                                                <li><AddIcon style={{marginBottom:'-8px',cursor:'pointer'}} onClick={ () => {this.handleAddQuantity(item)}} /> {item.quantity} <RemoveIcon style={{marginBottom:'-8px',cursor:'pointer'}} onClick={ () => {this.handleMinusQuantity(item)}} /></li>
                                                <li><button style={{backgroundColor:'transparent',border:'2px solid black',fontWeight:'bold',cursor:'pointer',marginTop:'40px',outline:'none'}} onClick={ () => {this.handleRemoveItem(item)}}>REMOVE ITEM</button></li>
                                            </ul>
                                            {/* <TableRow style={{border:'2px solid red'}}>{item.title}</TableRow>
                                            <TableRow style={{border:'2px solid red'}}>${item.price}</TableRow>
                                            <TableRow style={{border:'2px solid red'}}>+ {item.quantity} -</TableRow>
                                            <TableRow style={{border:'2px solid red'}}>Remove Item</TableRow> */}
                                        </TableCell>
                                    </TableRow>                                    
                                </TableBody>
                            </Table>
                        </TableContainer>

                        // <TableContainer>
                        //     <Table>
                        //         <TableBody>
                        //             <TableRow>
                        //                 <TableCell style={{border:'2px solid red'}}>
                        //                     <img src={item.img} alt={item.title} style={{width:'50%'}} />
                        //                 </TableCell>
                        //                 <TableCell style={{border:'2px solid red'}}>
                        //                     <ul style={{listStyleType:'none',paddingLeft:'0px'}}>
                        //                         <li>{item.title}</li>
                        //                         <li>{item.price}</li>
                        //                         <li>+{item.quantity}-</li>
                        //                         <li>Remove item</li>
                        //                     </ul> 
                        //                 </TableCell> 
                        //             </TableRow>
                        //         </TableBody>
                        //     </Table>
                        // </TableContainer>

                        // <TableContainer style={{borderBottom:'2px solid black'}}>
                        //     <Table>
                        //         <TableBody>
                        //             <TableRow>
                        //                 <TableCell style={{width:'60%'}}><img src={item.img} alt={item.title} style={{width:'100%'}} /></TableCell>
                        //                 <TableCell align="center" style={{textTransform:'uppercase',fontWeight:'bold',border:'2px solid red'}}>
                        //                     <TableRow style={{border:'2px solid blue'}}>{item.title}</TableRow>
                        //                     <TableRow>${item.price}</TableRow>
                        //                     <TableRow><AddIcon style={{marginBottom:'-5px'}} />{item.quantity}<RemoveIcon style={{marginBottom:'-5px'}} /></TableRow>
                        //                     <TableRow>Remove Item</TableRow>
                        //                 </TableCell>
                        //             </TableRow>
                        //         </TableBody>
                        //     </Table>
                        // </TableContainer>

                        // <TableContainer>
                        //     <Table>
                        //         <TableBody>
                        //             <TableRow style={{borderBottom: '2px solid black'}}>
                        //                 <TableCell style={{width:'60%'}}><img src={item.img} alt={item.title} style={{width:'100%'}} /></TableCell>
                        //                 <TableCell style={{fontWeight:'bold',height:'100%'}}>
                        //                     <ul style={{listStyleType:'none',paddingLeft:'0px'}}>
                        //                         <li>{item.title}</li>
                        //                         <li>${item.price}</li>
                        //                         <li>
                        //                             <button onClick={ () => {this.handleAddQuantity(item)} } style={{backgroundColor:'transparent', border:'none'}}>
                        //                                 <AddIcon style={{marginBottom:'-3px'}} />
                        //                             </button>
                        //                             QTY:{item.quantity}
                        //                             <button onClick={ () => {this.handleMinusQuantity(item)} } style={{backgroundColor:'transparent', border:'none'}}>
                        //                                 <RemoveIcon style={{marginBottom:'-3px'}} />
                        //                             </button>
                        //                         </li>
                        //                         <li><button onClick={ () => {this.handleRemoveItem(item)} } style={{backgroundColor:'transparent'}}>REMOVE ITEM</button></li>
                        //                     </ul>
                        //                 </TableCell>
                        //             </TableRow>
                        //         </TableBody>
                        //     </Table>   
                        // </TableContainer>                              
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
            <Grid container style={{margin:'20px'}}>

                {/* Cart */}
                <Grid item xs={12} md={8}>
                    {cartItems}
                </Grid>

                {/* Order Summary */}
                <Grid item xs={12} md={4}>
                    <div>
                        <TableContainer>
                            <Table>
                                <TableHead style={{border:'2px solid black'}}>
                                    <TableRow>
                                        <TableCell align='center' colSpan={2}><span style={{backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)',fontWeight:'bold',fontSize:'14px'}}>ORDER SUMMARY</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{fontWeight:'bold'}}>SUBTOTAL</TableCell>
                                        <TableCell align='right' style={{fontWeight:'bold'}}>${this.props.subTotal}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{fontWeight:'bold'}}>SHIPPING</TableCell>
                                        <TableCell align='right' style={{fontWeight:'bold'}}>FREE</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{fontWeight:'bold'}}>ORDER TOTAL</TableCell>
                                        <TableCell align='right' style={{fontWeight:'bold'}}>${this.props.cartTotal}</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                            <button style={button}>PROCEED TO CHECKOUT</button>
                        </TableContainer>                        
                    </div>

                </Grid>
                
                {/* <Grid item container justify='flex-end' xs={12} md={6} style={{borderTop:'2px solid black'}}>
                    {cartItems}
                </Grid>

                <Grid item container xs={12} md={6} justify='flex-end' alignItems='flex-start' style={{border:'2px solid blue'}}>
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
                </Grid> */}

            </Grid>
        );
    }
}

// export default Cart;
export default connect(mapStateToProps, mapDispatchToProps)(Cart);