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

import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';

import DatePicker from 'react-date-picker';

import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import 'rc-time-picker/assets/index.css';


function showError(text,phoneBool,passBool,fnameBool) {
    let error = document.querySelector('#errorText');
    let phoneCom = document.querySelector('#eventName');
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
    EventNameClass: {
      fontSize:"initial",
    },
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
    },
    DatePicker: {
        borderRadius: "5px",
        border: "gray 1px solid",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));

  function loadScript(src, position, id) {
    if (!position) {
      return;
    }
  
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
  }
  
  const autocompleteService = { current: null };

export const FormAddEvent = () => {

    const classes = useStyles();

    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);

    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
          loadScript(
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyAti0LRf12uh0NK9hEA2-YKYBXMlJrY3xo&libraries=places',
            document.querySelector('head'),
            'google-maps',
          );
        }
        loaded.current = true;
    }

    const handleChange = event => {
        setInputValue(event.target.value);
    };
    
    const fetch = React.useMemo(
        () =>
          throttle((input, callback) => {
            autocompleteService.current.getPlacePredictions(input, callback);
          }, 200),
        [],
    );

    React.useEffect(() => {
        let active = true;
    
        if (!autocompleteService.current && window.google) {
          autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
          return undefined;
        }
    
        if (inputValue === '') {
          setOptions([]);
          return undefined;
        }
    
        fetch({ input: inputValue }, results => {
          if (active) {
            setOptions(results || []);
          }
        });
    
        return () => {
          active = false;
        };
      }, [inputValue, fetch]);


    const DatePickerChange = (e) => {
        console.log(e);
        this.value = e;
    };
    
    const SubmitAddEvent = () => {

        let flag = 0;

        if (eventName.length<=3) {
            showError("Event name must be more than 3 letters");
        }
    };

    const [eventName,setEventName] = useState("");

    const [eventDesc,setEventDesc] = useState("");

    const [eventLocation,setEventLocation] = useState("");

    const [eventPhone,setEventPhone] = useState("");

    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");

    const [startTime,setStartTime] = useState("");
    const [endTime,setEndTime] = useState("");

    return (
        <Container component="main" maxWidth="md" style={{marginTop:"60px",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Typography variant="h2">
                Add Event
            </Typography>
            <Grid container spacing={2} style={{marginTop:"30px"}}>
                <Grid item xs="5" className={classes.EventNameClass}>
                    <TextField variant="outlined" required fullWidth autoFocus
                    id="eventName"
                    label="Event Name"
                    name="eventName"
                    className={classes.EventNameClass}
                    style={{fontSize:"xl"}}
                    onChange={e => setEventName(e.target.value)}
                    />
                </Grid>
                <Grid item xs="12">
                    <TextField variant="outlined" fullWidth multiline rows="4"
                    id="eventDesc"
                    label="Event Description"
                    name="eventDesc"
                    onChange={e => setEventDesc(e.target.value)}
                    />
                </Grid>

                <Grid item xs="6">
                    <Autocomplete
                    id="location"
                    label="Event Location"
                    name="location"
                    //style={{ width: 300 }}
                    getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
                    filterOptions={x => x}
                    options={options}
                    autoComplete
                    includeInputInList
                    freeSolo
                    disableOpenOnFocus
                    renderInput={params => (
                        <TextField
                        {...params} required fullWidth
                        label="Event Location"
                        variant="outlined"
                        onChange={handleChange,e => setEventLocation(e.target.value)}
                        />
                    )}
                    renderOption={option => {
                        const matches = option.structured_formatting.main_text_matched_substrings;
                        const parts = parse(
                        option.structured_formatting.main_text,
                        matches.map(match => [match.offset, match.offset + match.length]),
                        );

                        return (
                        <Grid container alignItems="center">
                            <Grid item>
                            
                            </Grid>
                            <Grid item xs>
                            {parts.map((part, index) => (
                                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                {part.text}
                                </span>
                            ))}
              

                            <Typography variant="body2" color="textSecondary">
                                {option.structured_formatting.secondary_text}
                            </Typography>
                            </Grid>
                        </Grid>
                        );
                    }}
                    />
                </Grid>

                <Grid item xs="6">
                    <TextField variant="outlined" fullWidth
                    id="phone" required
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                    onChange={e => setEventPhone(e.target.value)}
                    />
                </Grid>
                <Grid container direction="row" xs="10" style={{marginLeft:"20px",fontSize:"24px"}}>
                    <Grid container direction="column" xs="6">
                        <Grid item>
                            <Typography id="startingTime">
                                Starting Date
                            </Typography>
                        </Grid>
                        <Grid item>
                            <DatePicker id='startDatePicker' className={classes.DatePicker} required
                             minDate={new Date()}  onChange={e => (setStartDate(e), setEndDate(e))}
                            value={startDate}/>
                        </Grid>
                        <TimePicker id='startTimePicker' placeholder="Strating Time" onChange={e => setStartTime(e)} showSecond={0} style={{width:"50%"}}/> 
                    </Grid>
                    <Grid container direction="column" xs="6" >
                        <Grid item>
                            <Typography id="endingTime" >
                            Ending Date
                            </Typography>
                        </Grid> 
                        <Grid item>
                            <DatePicker id='endDatePicker' className={classes.DatePicker} required
                             minDate={new Date()} onChange={e => setEndDate(e)}
                             value={endDate}/>
                             
                        </Grid>
                        <TimePicker id='endTimePicker' placeholder="Ending Time" onChange={e => setEndTime(e)} showSecond={0} style={{width:"50%"}}/> 
                    </Grid>
                </Grid>
                <Grid item xs="12">
                <p id="errorText" style={{transition:"1s" , height:"0px", color:"red",display:"flexbox", padding:"0 0 0 0", margin:"5px 0 0 0", textAlign:"center"}}></p>
                </Grid>
                <Grid item xs="12">
                    <Button fullWidth variant="contained" color="primary" className={classes.submit}
                    onClick={SubmitAddEvent} >
                        Sign Up
                    </Button>
                </Grid>
                
            </Grid>
        </Container>
    )
}