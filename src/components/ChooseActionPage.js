import React , {useState} from "react";
import facebookLike from '../images/facebookLike.png'
import facebookShare from '../images/facebookShare.png'
//import List from '@material-ui/core/List';
//import Container from '@material-ui/core/Container';
//import Divider from '@material-ui/core/Divider';
import Divider , { Container, List, Table , TableBody , TableCell, TableRow ,TableHead} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

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
      paddingTop: '85.7%', // 6:7
      cursor: 'pointer',
      height: '100%',
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    headText: {
        marginTop: "30px",
    },
    text: {
        margin: '20px 20px 20px 20px',
    },
  }));


export const ChooseActionPage = () => {
    let page;
    let user = "nadav";
    let points = -1
    const classes = useStyles();

    

    const cards = [
        {number: 1, name: "Like" ,url: facebookLike},
        {number: 2, name: "Share" ,url: facebookShare},
        {number: 3, name: "View" },
        {number: 4, name: "Manage"}];

    return (
        <div>
            <h1 style={{textAlign:"left",marginLeft:"10%",marginRight:"10%",marginTop:"30px"}}>
                Hello {user}, currently you have {points} points.
            </h1>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}

                <Grid container spacing={4}>
                    {cards.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={card.url}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                {card.name}
                                </Typography>
                                <Typography>
                                This is a media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                        </Card>
                        
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );

}