import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function showError(text,phoneBool,passBool,fnameBool) {
    let error = document.querySelector('#errorText');
    let phoneCom = document.querySelector('#phone');
    let passCom = document.querySelector('#password');
    let fnameCom = document.querySelector('#firstName');
    if (phoneBool)
        phoneCom.style.color = "red";
    if (passBool)
        passCom.style.color = "red";
    if (fnameBool)
        fnameCom.style.color = "red";

    let errorHeight = error.style.height;
    if (!errorHeight)
        errorHeight = 15;
    else {
        error.innerHTML += "</br>";
        errorHeight += 10;
    }
    error.style.height = errorHeight+"px";
    error.innerHTML += text;
}

function clearError() {
    let error = document.querySelector('#errorText');
    error.style.height = "0px";
    error.innerHTML = "";
    document.querySelector('#password').style.color = "black";
    document.querySelector('#phone').style.color = "black";
}


const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export const SignUp = () => {

    const [phone,setPhone] = useState("");
    const [pass,setPass] = useState("");
    const [fname,setFname] = useState("");


    const SubmitSignUpForm = (event) => {
        clearError();
        if (phone.length!=10)
            showError("Phone must be 10 digits",1,0,0);

        if (pass.length<8)
            showError("Password must be more than 8 letters",0,1,0);

        if (fname.length<2)
            showError("First name must be more than 2 letters",0,0,1);
    
        event.preventDefault();
    };


    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth variant="outlined" autoFocus
                autoComplete="fname"
                name="firstName"
                id="firstName"
                label="First Name"
                onChange={(e) => (setFname(e.target.value), clearError())}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" required fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                onChange={(e) => (setPhone(e.target.value), clearError())}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => (setPass(e.target.value), clearError())}
              />
            </Grid>
          </Grid>
          <p id="errorText" style={{transition:"1s" , height:"0px", color:"red",display:"flexbox", padding:"0 0 0 0", margin:"5px 0 0 0", textAlign:"center"}}></p>
          <Button fullWidth variant="contained" color="primary" className={classes.submit}
          onClick={SubmitSignUpForm} >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/LogIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    )
}