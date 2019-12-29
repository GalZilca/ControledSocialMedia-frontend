
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import { Typography, BottomNavigationAction, Container, Grid } from "@material-ui/core"
import { ChooseActionPage } from "./ChooseActionPage"
import BraveTogether from '../images/BraveTogether.png'
import LogIn from "../images/LogIn.png"
import SignUp from "../images/SignUp.png"

export const Dashboard = () => {
    const [user, setUser] = useState({name: "guest", credits: "0", isManager: 0})

    return (
        <Container style={{ backgroundColor: "#33B7FF", height: 90 }}>
            <Grid style={{ height: 90, flexWrap: "inherit" }} container direction="row" justify="space-around" alignItems="stretch">
                <p style={{ width: 450, marginTop: 31.5 }}>
                    Hello {user.name}, currently you have {user.credits} credits.
                </p>

                <Grid style={{ height: 90, flexWrap: "inherit" }} container direction="row" justify="flex-end" alignItems="stretch">
                    <Link to="/logIn">
                        <BottomNavigationAction style={{ justifyContent: "right" }} label="Log in" icon={
                            <img style={{ height: "50px", width: "50px" }} src={LogIn}/>}
                        />
                    </Link>

                    <Link to="/signUp">     
                        <BottomNavigationAction style={{ color: "white" }} label="Sign Up" icon={
                            <img style={{ height: "50px", width: "50px" }} src={SignUp}/>}
                        />
                    </Link>
                    <Link to="/formAddEvent">
                        <p style={{ justifyContent: "right" }}>add event</p>
                    </Link>
                </Grid>
            </Grid>
            
            <Grid style={{ marginTop: 40 }} container direction="row" justify="space-around" alignItems="stretch">
                <Typography /*style={{ marginLeft: 60 }}*/ variant="h3"
                    >Brave together
                </Typography>
                <img style={{ height: "72px", width: "72px", /*marginRight: 60*/ }} src={BraveTogether} alt="logo" />
            </Grid>
            {/* <Typography style={{ marginLeft: 60, marginTop: 20 }} variant="h5"
                >The Brave together ...
            </Typography> */}
            <ChooseActionPage/>
        </Container>
    )
}