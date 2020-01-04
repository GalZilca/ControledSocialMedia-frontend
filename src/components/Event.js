import React,{useState} from "react";
import { Typography, Paper, Card, CardContent } from "@material-ui/core";
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

export class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {},
            askingLocation: false
        }
        this.state.event = props.location.state.event
    }
    
    ConfirmLocation = (GeoLock) => {
        alert("You made it! x = "+GeoLock.location_x+ " , y = "+GeoLock.location_y);
        
        // axios.post("/verify_location", {GeoLock.location_x, GeoLock.location_y, GeoLock.event_id}).then(res => {
        //     console.log(res);
        //     console.log(res.data); 
        // });
        GeoLock.event_id = "1234";
        console.log(GeoLock);
    }

    changeLocation = () => {
        this.setState(() => ({askingLocation: true}))
    }

    render() {
        return (
            <Container component="main" maxWidth="md" style={{marginTop:"60px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Card>
                    <CardContent style={{ height: "440px" }}>
                        <Paper elevation={3} />
                        <Typography variant="h3">
                            {this.state.event.name}
                        </Typography>
                        
                        <Grid container spacing={2} style={{marginTop:"30px",height:"30px"}}>
                            <Grid item xs="8">
                                <div style={{whiteSpace:"nowrap"}}>
                                    <Typography variant="h6">
                                    Event Name - 
                                    </Typography>
                                    <Typography variant="h4">
                                    {this.state.event.name}
                                    </Typography>
                                </div>
                                <Typography variant="h7">
                                Location - {this.state.event.location_x}, {this.state.event.location_y} 
                                </Typography>
                            </Grid>

                            <Grid item xs="4">
                                <Typography variant="h5">
                                Dates - 
                                </Typography>
                                <Typography variant="h6">
                                {/* {event.startDate}{event.startTime} 25.12.19 - 26.12.19 {event.endDate}{event.endTime} */}
                                </Typography>
                            </Grid>

                            <Grid style={{ marginTop: 40 }} item xs="12">
                                <Typography variant="h4">
                                About - {this.state.event.about}
                                </Typography>
                            </Grid>

                            <Grid style={{ marginTop: 40 }} item xs="6">
                            <Typography variant="h6">
                                Phone Number - {this.state.event.creator_phone}
                                </Typography>
                            </Grid>
                            <Grid style={{ marginTop: 80 }} item xs="12">
                                <Button fullWidth variant="contained" color="secondary"
                                    onClick={()=>{this.changeLocation}}>
                                Confirm Location
                                </Button>
                            </Grid>
                            <Grid style={{ marginTop: 80 }} item xs="12">
                                {this.state.askingLocation && <Geo onGetLocation={(GeoLock) => {this.ConfirmLocation(GeoLock)}}/>}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        )
    }
}