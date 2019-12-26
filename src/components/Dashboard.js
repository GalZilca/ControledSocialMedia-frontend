
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import { Typography, BottomNavigationAction, Container, Grid } from "@material-ui/core"
import { ChooseActionPage } from "./ChooseActionPage"
import BraveTogether from '../images/BraveTogether.png'
import LogIn from "../images/LogIn.png"
import SignUp from "../images/SignUp.png"

export const Dashboard = () => {
    const [user, setUser] = useState({name: "guest", credits: "0"})

    return (
        <Container style={{ backgroundColor: "gray", height: 90 }}>
            <Grid style={{ height: 90, flexWrap: "inherit" }} container direction="row" justify="space-around" alignItems="stretch">
                <p style={{ width: 450, color: "white", marginTop: 31.5 }}>
                    Hello {user.name}, currently you have {user.credits} credits.
                </p>

                <Grid style={{ height: 90, flexWrap: "inherit" }} container direction="row" justify="flex-end" alignItems="stretch">
                    <Link to="/logIn">
                        <BottomNavigationAction style={{ color: "white", justifyContent: "right" }} label="Log in" icon={
                            <img style={{ height: "50px", width: "50px" }} src={LogIn}/>}
                        />
                    </Link>

                    <Link to="/signUp">     
                        <BottomNavigationAction style={{ color: "white" }} label="Sign Up" icon={
                            <img style={{ height: "50px", width: "50px" }} src={SignUp}/>}
                        />
                    </Link>
                </Grid>
            </Grid>
            
            <Grid style={{ marginTop: 40 }} container direction="row" justify="space-around" alignItems="stretch">
                <Typography /*style={{ marginLeft: 60 }}*/ variant="h3"
                    >Brave together
                </Typography>
                <img style={{ height: "72px", width: "72px", /*marginRight: 60*/ }} src={BraveTogether} alt="logo" />
            </Grid>
            <Typography style={{ marginLeft: 60, marginTop: 20 }} variant="h5"
                >The Brave together ...
            </Typography>
            <ChooseActionPage/>
        </Container>
    )
}