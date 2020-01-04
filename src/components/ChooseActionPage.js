import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Card, CardMedia, CardContent, Typography } from "@material-ui/core"
import { Container } from "@material-ui/core"
import { Link } from "react-router-dom";
import Brave2 from '../images/Brave.jpg';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    pointer: {
        cursor: "pointer",
    },
}));

export const ChooseActionPage = () => {
    const [events, setEvents] = useState([]);
    const classes = useStyles();
    

    axios.get("/get_all_events").then(res => {
        const data = res.data.all_events;
        setEvents(data);
    })
    console.log(events)
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {events.map(event => (
                    <Grid item key={event} xs={12} sm={6} md={4}>
                        <Link to={{pathname: "/Event", state:{event}}}>
                            <Card className={classes.pointer}>
                                <CardMedia className={classes.cardMedia} title="Image title"
                                    image={Brave2}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {event.name}
                                    </Typography>
                                    <Typography>
                                        {event.about}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}