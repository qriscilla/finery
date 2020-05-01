import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const account = {
    margin: '10px'
}
const ul = {
    listStyleType: 'none'
}
const sign = {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '15px',
}
const field = {
    marginBottom:'12px',
    fontWeight:'bold',
    fontSize:'15px'
}
const fields = {
    marginBottom: '14px',
    fontWeight:'bold',
    fontSize:'15px',
    marginRight:'75px'
}
const input = {
    outline:'none',
    fontWeight:'bold',
    textTransform:'uppercase',
    border:'none',
    borderBottom:'2px solid black',
    fontSize:'14px',
    letterSpacing:'0.1em',
    width:'200px',
    marginBottom:'8px'
}
const buttonSpan = {
    textAlign:'center',marginTop:'20px'
}
const button = {
    backgroundColor:'white',
    border:'2px solid black',
    fontWeight:'bold',
    width:'70',
    fontSize:'15px',
    outline:'none',
    cursor: 'pointer'
}

const useStyles = makeStyles((theme) => ({
    borderLeft: {
        [theme.breakpoints.up('md')]: {
            borderLeft: '2px solid black',
        }
      },
    borderBottom: {
        [theme.breakpoints.down('sm')]: {
            borderBottom: '2px solid black',
            marginBottom: '40px',
            paddingBottom: '40px',
            marginTop: '40px'
        },
    },
  }));

function Account() {
    const classes = useStyles();
    
    return (

        <Grid container style={account} alignItems='flex-start'>

            <Grid item container direction='column' justify='center' xs={12} md={6} className={classes.borderBottom}>
                <span style={sign}>SIGN IN WITH AN EXISTING ACCOUNT</span>
                

                <Grid item container direction='row' justify='center' style={{marginLeft:'-20px'}}>
                    <Grid item>
                            <ul style={ul}>
                                <li style={field}>EMAIL</li>
                                <li style={fields}>PASSWORD</li>
                            </ul>
                        </Grid>
                        <Grid item>
                            <ul style={ul}>
                                <li><input type='email' style={input}></input></li>
                                <li><input type='password' style={input}></input></li>
                            </ul>
                        </Grid>     
                </Grid>                 

                <span style={buttonSpan}>
                    <button style={button}>SIGN IN</button>
                </span>
            </Grid>

            <Grid item container direction='column' justify='center' xs={12} md={6} className={classes.borderLeft}>
                <span style={sign}>SIGN UP TO BE A MEMEBER</span>

                <Grid item container direction='row' justify='center' style={{marginLeft:'-20px'}}>
                    <Grid item>
                        <ul style={ul}>
                            <li style={field}>FIRST NAME</li>
                            <li style={field}>LAST NAME</li>
                            <li style={field}>EMAIL</li>
                            <li style={field}>CONFIRM</li>
                            <li style={field}>PASSWORD</li>
                            <li style={field}>CONFIRM PASSWORD</li>
                            <li style={field}>BIRTHDAY</li>
                        </ul>
                    </Grid>
                    <Grid item>
                        <ul style={ul}>
                            <li><input type='text' style={input}></input></li>
                            <li><input type='text' style={input}></input></li>
                            <li><input type='email' style={input}></input></li>
                            <li><input type='email' style={input}></input></li>
                            <li><input type='text' style={input}></input></li>
                            <li><input type='text' style={input}></input></li>
                            <li><input type='date' style={input}></input></li>
                        </ul>
                    </Grid>    
                </Grid> 

                <span style={buttonSpan}>
                    {/* <p style={{fontSize:'12px',fontWeight:'bold'}}>BY CREATING YOUR ACCOUNT, YOU AGREE TO OUR TERMS AND CONDITIONS & PRIVACY POLICY</p> */}
                    <button style={button}>SIGN IN</button>
                </span>
            </Grid>

        </Grid>
    );
}

export default Account;