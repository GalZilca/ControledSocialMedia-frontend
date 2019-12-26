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


const useStyles = makeStyles(theme => ({
    EventNameClass: {
      fontSize:"initial",
    },
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
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
                    //onChange={(e) => (setPhone(e.target.value), clearError())}
                    />
                </Grid>
                <Grid item xs="12">
                    <TextField variant="outlined" fullWidth multiline rows="4"
                    id="eventDesc"
                    label="Event Description"
                    name="eventDesc"
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
                        {...params}
                        label="Add a location"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
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
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                    />
                </Grid>
                <Grid item xs="6">
                    <TextField variant="outlined" fullWidth
                    id="startingTime"
                    label="Starting Time"
                    name="startingTime"
                    autoComplete="startingTime"
                    />
                </Grid>
                <Grid item xs="6">
                    <TextField variant="outlined" fullWidth
                    id="endingTime"
                    label="Ending Time"
                    name="endingTime"
                    autoComplete="endingTime"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}