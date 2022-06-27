import logo from '../../assests/logo.png'

import { TextField } from "@mui/material";
import * as React from 'react';
import QouteFormInputs from '../QouteFormInputs';


const colors = [
    'White',
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Aqua',
    'Purple',
    'Light Blue',
    'Off White',
];


const quantity = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,

];

export default function QouteModal({ }) {

    const [amount, setAmount] = React.useState(false);

    return <>
        <h2 style={{ textAlign: "center", fontFamily: "SharpSansBold", fontSize: "28px", textDecoration: "", color: "#E70A7F" }}><b>Qoute Calculator</b></h2>
        <h5 style={{ fontFamily: "SharpSans2", fontSize: "17px", cursor: "pointer" }} >Pricing is based on several factors as mentioned below:</h5>
        <h4 style={{ fontFamily: "SharpSans2", marginBottom: "10px", fontSize: "22px", marginRight: "5px", }}> Product Color</h4>
        <QouteFormInputs data={colors} size={320} label="Color" />
        <h4 style={{ fontFamily: "SharpSans2", marginBottom: "10px", fontSize: "22px", marginRight: "5px", marginTop: "5px" }}> Numbers of Colors in Artwork</h4>
        <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
                <h4 style={{ fontFamily: "SharpSans1", fontSize: "18px", marginRight: "5px" }}>Front: </h4>
                <QouteFormInputs data={quantity} size={80} label="Front" />
            </div>
            <div style={{ display: 'flex', alignItems: "center" }}>
                <h4 style={{ fontFamily: "SharpSans1", fontSize: "18px", marginRight: "5px" }}>Back: </h4>
                <QouteFormInputs data={quantity} size={80} label="Back" />
            </div>
        </div>
        <h4 style={{ fontFamily: "SharpSans2", marginBottom: "10px", fontSize: "22px", marginRight: "5px", marginTop: "5px" }}>Enter Quantity</h4>
        <TextField required id="outlined-basic" label="Quantity" variant="outlined" />
        <br></br><br></br>
        {amount &&
            <h4 style={{ fontFamily: "SharpSans2", marginBottom: "10px", fontSize: "22px", marginRight: "5px", marginTop: "5px" }}>Estimated Cost is :$30.5</h4>
        }
        <button className="signInBtn" style={{ fontSize: "16px" }} onClick={() => setAmount(true)} >Calculate</button>
    </>;
}



