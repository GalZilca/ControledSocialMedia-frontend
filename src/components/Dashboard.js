
import React from "react"
import { Typography } from "@material-ui/core"
import BraveTogether from '../images/BraveTogether.png'

export const Dashboard = () => {
    return (
        <div>
            <Typography style={{ marginLeft: 80, marginTop: 60, display: "inline-block" }} variant="h3"
                >Brave together
            </Typography>
            <img style={{ height: "50px", width: "50px", marginTop: 60, display: "inline-block" }} src={BraveTogether} alt="logo" />
            <Typography style={{ marginLeft: 80, marginTop: 60 }} variant="h5"
                >The Brave together ...
            </Typography>
            
        </div>
    )
}