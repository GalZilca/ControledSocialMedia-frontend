
import React from "react";
import { geolocated } from "react-geolocated";
import axios from 'axios';


class Demo extends React.Component {

    render() {     

        let f = !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>altitude</td>
                        <td>{this.props.coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{this.props.coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{this.props.coords.speed}</td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <div>Getting the location data&hellip; </div>
        );

        if (this.props.isGeolocationAvailable)
            if (this.props.isGeolocationEnabled)
                if (this.props.coords){
                    let location_x = this.props.coords.latitude;
                    let location_y = this.props.coords.longitude;
                    let event_id = "5432654635";

                    console.log(location_x);
                    console.log(location_y);

                    axios.post("/verify_location", { location_x, location_y,event_id}).then(res => {
                        console.log(res);
                        console.log(res.data);
                    });
                }       
      return f;
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 6000,
})(Demo);