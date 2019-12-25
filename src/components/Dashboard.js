
import React from "react"
import { Link } from 'react-router-dom';
import { Typography, BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import BraveTogether from '../images/BraveTogether.png'
import LogIn from "../images/LogIn.png"
import SignUp from "../images/SignUp.png"

export const Dashboard = () => {
    return (
        <div>
            <BottomNavigation style={{ backgroundColor: "gray", height: 90 }}>
                
                    <BottomNavigationAction style={{ color: "white" }} label="Log in" icon={
                        <img style={{ height: "50px", width: "50px" }} src={LogIn}/>}
                    />
                    <Link to="/logIn"/>
                        
                    <BottomNavigationAction style={{ color: "white" }} label="Sign Up" icon={
                        <img style={{ height: "50px", width: "50px" }} src={SignUp}/>}
                    />
                    <Link to="/signUp"/>
            </BottomNavigation>
            
            <Typography style={{ marginLeft: 80, marginTop: 60, display: "inline-block" }} variant="h3"
                >Brave together
            </Typography>
            <img style={{ height: "50px", width: "50px", marginTop: 60, marginLeft: 400, display: "inline-block" }} src={BraveTogether} alt="logo" />
            <Typography style={{ marginLeft: 80, marginTop: 40 }} variant="h5"
                >The Brave together ...
            </Typography>
            
        </div>
    )
}