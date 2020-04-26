import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { Grid, Table, TableBody, TableRow } from '@material-ui/core';
// import { withStyles } from "@material-ui/core/styles";
// import MuiTableCell from "@material-ui/core/TableCell";

const footer = {
    fontSize: '11px',
    fontWeight: 'bold',
}
const portfolio = {
    color: 'black'
}
// const ul = {
//     listStyleType: 'none',
//     fontSize: '12px',
//     paddingLeft: '0px',
//     width: '90%'
// }
// const title = {
//     borderBottom: '2px solid black',
//     fontWeight: 'bold',
//     fontSize: '12px'
// }
// const TableCell = withStyles({
//     root: {
//       borderBottom: "none"
//     }
//   })(MuiTableCell);

function Footer() {
    return(
        <Grid item container justify='center' style={footer}>
            {/* <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <ul style={ul}>
                                <li style={title}>FIND US ON</li>
                                <li>Instagram</li>
                                <li>Pinterest</li>
                            </ul>
                        </TableCell>
                        <TableCell>
                            <ul style={ul}>
                                <li style={title}>OUR LOCATION</li>
                                <li>Center City</li>
                                <li>Philadelphia</li>
                            </ul>                                    
                        </TableCell>
                        <TableCell>
                            <ul style={ul}>
                                <li style={title}>INFORMATION</li>
                                <li>About Finery</li>
                                <li>Contact Us</li>
                            </ul>                                    
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table> */}
            {/* <Grid item xs={4}>
                <ul style={ul}>
                    <li style={title}>FIND US ON</li>
                    <li>Instagram</li>
                    <li>Pinterest</li>
                </ul>
            </Grid>
            <Grid item xs={4}>
                <ul style={ul}>
                    <li style={title}>OUR LOCATION</li>
                    <li>Center City</li>
                    <li>Philadelphia, PA</li>
                </ul>
            </Grid>
            <Grid item xs={4}>
                <ul style={ul}>
                    <li style={title}>INFORMATION</li>
                    <li>About Finery</li>
                    <li>Contact Us</li>
                </ul>
            </Grid> */}
            <Grid xs={12} item container justify='center'>
                <p>WEBSITE DESIGNED AND DEVELOPED BY{" "}<a href='https://priwhang.com/' target='_blank' rel="noopener noreferrer" style={portfolio}>PRISCILLA WHANG</a></p>
            </Grid>
        </Grid>
    );
}

export default Footer;