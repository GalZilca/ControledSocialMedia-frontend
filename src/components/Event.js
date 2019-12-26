import React from "react";
import { Typography, Paper } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { geolocated } from "react-geolocated";

import Geo from './Geo.js';
import axios from 'axios';

export const Event = () => {

    let eventName;
    let eventDesc;
    let eventLocation;
    let eventPhone;
    let eventStartDate;
    let eventStartTime;
    let eventEndDate;
    let eventEndTime;
    
    const ConfirmArrival = () => {
        geoloc = <Geo />;
    };

    return (
        <Container component="main" maxWidth="md" style={{marginTop:"60px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Geo/>
            <Paper elevation={3} />
            <Typography variant="h3">
                {eventName}
            </Typography>
            <Grid container spacing={2} style={{marginTop:"30px",height:"30px"}}>
                <Grid item xs="8">
                    <div style={{whiteSpace:"nowrap"}}>
                        <Typography variant="h6">
                        Event Name - 
                        </Typography>
                        <Typography variant="h4">
                        {eventName}
                        </Typography>
                    </div>
                    <Typography variant="h7">
                    Location - {eventLocation}
                    </Typography>
                </Grid>

                <Grid item xs="4">
                    <Typography variant="h5">
                    Dates
                    </Typography>
                    <Typography variant="h6">
                    {eventStartDate},{eventStartTime} - {eventEndDate},{eventEndTime}
                    </Typography>
                </Grid>

                <Grid item xs="12">
                    <Typography variant="h4">
                    About - {eventDesc}
                    </Typography>
                </Grid>

                <Grid item xs="6">
                <Typography variant="h6">
                    Phone Number - {eventPhone}
                    </Typography>
                </Grid>
                <Grid item xs="12">
                    <Button fullWidth variant="contained" color="secondary" style={{margin: "50px 0 0 20px" }}
                        onClick={}>
                    </Button>
                </Grid>
                
            </Grid>
            
        </Container>
    )
}