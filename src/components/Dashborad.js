
import React from "react"
import { Typography } from "@material-ui/core"
import BraveTogether from '../images/BraveTogether.png'

export const Dashborad = () => {
    return (
        <div>
            <Typography style={{ marginLeft: 80, marginTop: 60}} variant="h3"
                >Brave together
            </Typography>
            <Typography style={{ marginLeft: 80, marginTop: 60 }} variant="h5"
                >The Brave together ...
            </Typography>
            <img style={{ height: "100px", width: "100px", marginTop: 60, marginLeft: 600 }} src={BraveTogether} alt="logo" />
        </div>
    )
}