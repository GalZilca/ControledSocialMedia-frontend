
import React from "react";
import { geolocated } from "react-geolocated";

let FoundLocation = false;

class geoLocate extends React.Component {

    render() {
        if (!FoundLocation){
            let geoObject;
            if (this.props.isGeolocationAvailable){
                if (this.props.isGeolocationEnabled){
                    if (this.props.coords){

                        geoObject = {
                            location_x : this.props.coords.latitude,
                            location_y : this.props.coords.longitude,
                            accuracy : this.props.coords.accuracy,
                        }
                        this.props.onGetLocation(geoObject);
                        FoundLocation=true;
        }}}}
        return "";
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 6000,
})(geoLocate);