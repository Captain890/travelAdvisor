import React,{ useRef } from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import {LocationOnOutlinedIcon} from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './style';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const isMobile = useMediaQuery('(min-width:600px)');
    const classes = useStyles();


    return(
       <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:`${process.env.REACT_APP_MAP_KEY}`}}
                defaultCenter={coordinates}
                center={coordinates}
                zoom={15}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
       </div>
    );
}
export default Map;