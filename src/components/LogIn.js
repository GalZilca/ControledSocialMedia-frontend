import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import BraveTogether from '../images/BraveTogether.png'

import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function showError(text,phoneBool,passBool) {
    let error = document.querySelector('#errorText');
    let phoneCom = document.querySelector('#phone');
    let passCom = document.querySelector('#password');
    if (phoneBool)
        phoneCom.style.color = "red";
    if (passBool)
        passCom.style.color = "red";
    
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export const LogIn = () => {
    //const [user, setUser] = useState("")
    const [phone,setPhone] = useState("");
    const [password,setpassword] = useState("");

    const SubmitLogInForm = (event) => {
        clearError();
        let flag = 0;
        if (phone.length!=10) {
            showError("Phone must be 10 digits long",1,0);
            flag = 1;
        }

        if (password.length<8) {
            showError("Password must be more than 8 letters long",0,1);
            flag = 1;
        }

        if (flag === 0) {
            // async () => {
                const user = {phone, password}

                const response = fetch("/login", {
                    method: "POST",
                    headers: {
                        "Content_Type": "application/json"
                    },
                    body: JSON.stringify(user)
                }).catch(e => {
                    console.log(e)
                })
    
                if (response.ok) {
                    console.log(response)
                }
            // }
        }
    
        // event.preventDefault();
    }

    let classes = useStyles();
    
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form}>
          <TextField variant="outlined" margin="normal" required fullWidth id="phone" label="Phone Number"
            name="phone" autoComplete="phone" autoFocus 
            onChange={e => (setPhone(e.target.value), clearError())}/>
          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password"
            type="password" id="password" autoComplete="current-password" 
            onChange={e => (setpassword(e.target.value), clearError())}/>
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <p id="errorText" style={{transition:"1s" , height:"0px", color:"red",display:"flexbox", padding:"0 0 0 0", margin:"5px 0 0 0", textAlign:"center"}}></p>
          <Button onClick={SubmitLogInForm} fullWidth variant="contained" color="primary" 
          className={classes.submit}>
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/Need to fill this" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/SignUp" variant="body2">
                {"Don't have an account? Log Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    )
}