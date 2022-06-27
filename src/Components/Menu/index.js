import { Col, Container, Row, NavItem, NavLink, NavbarToggler, Navbar, Collapse, Nav } from "reactstrap";
import logo from '../../assests/logo.png'

import { useState, useEffect } from 'react'
import SmallMenu from "../SmallMenu";
import { Fade } from "react-reveal";
import './index.css'
import axios from 'axios'
import SignInModal from "../SignInModal";
import SignUpModal from "../SignUpModal";

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";

export default function Menu() {

    const toggle = () => setIsOpen(!isOpen);
    const [isOpen, setIsOpen] = useState(false);
    const [mainCategory, setMainCategory] = useState()
    const [menu, setMenu] = useState(false);
    const [signIn, setSignIn] = useState(true);
    const [signUpBoxHeight, setSignUpBoxHeight] = useState("530px");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function soap() {

        console.log('soap');

        // fetch("https://ws.sanmar.com:8080/SanMarWebService/SanMarProductInfoServicePort?wsdl",
        // {
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     method: "POST",
        //     body:  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:impl="http://impl.webservice.integration.sanmar.com/">
        //         <soapenv:Header/>
        //         <soapenv:Body>
        //            <impl:getProductInfoByBrand>
        //               <!--Optional:-->
        //               <arg0>
        //                  <!--Optional:-->
        //                  <brandName>Hanes</brandName>
        //               </arg0>
        //               <!--Optional:-->
        //               <arg1>
        //                  <!--Optional:-->
        //                  <sanMarCustomerNumber>10675</sanMarCustomerNumber>
        //                  <!--Optional:-->
        //                  <sanMarUserName>adidasjedi</sanMarUserName>
        //                  <!--Optional:-->
        //                  <sanMarUserPassword>458nfulton</sanMarUserPassword>
        //                  <!--Optional:-->
        //                  <senderId>?</senderId>
        //                  <!--Optional:-->
        //                  <senderPassword>?</senderPassword>
        //               </arg1>
        //            </impl:getProductInfoByBrand>
        //         </soapenv:Body>
        //      </soapenv:Envelope>`, // This is the body part

        // })
        // .then(res=>{ console.log('aa',res) })




        // var XMLHttpRequest = require('xhr2');
        // var http_request= new XMLHttpRequest();

        // http_request.onreadystatechange = function () {
        //     console.log('onReady Func')
        // };
        // http_request.open("GET", "https://ws.sanmar.com:8080/SanMarWebService/SanMarProductInfoServicePort?wsdl");
        // http_request.withCredentials = true;
        // http_request.setRequestHeader("Content-Type", "application/json");
        // http_request.send();

        axios({
            method: 'post',
            url: `https://ws.sanmar.com:8080/SanMarWebService/SanMarProductInfoServicePort?wsdl`,
            headers: { 'Content-Type': "application/xml" },
            data: {
                foo: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:impl="http://impl.webservice.integration.sanmar.com/">
              <soapenv:Header/>
              <soapenv:Body>
                 <impl:getProductInfoByBrand>
                    <!--Optional:-->
                    <arg0>
                       <!--Optional:-->
                       <brandName>Hanes</brandName>
                    </arg0>
                    <!--Optional:-->
                    <arg1>
                       <!--Optional:-->
                       <sanMarCustomerNumber>10675</sanMarCustomerNumber>
                       <!--Optional:-->
                       <sanMarUserName>adidasjedi</sanMarUserName>
                       <!--Optional:-->
                       <sanMarUserPassword>458nfulton</sanMarUserPassword>
                       <!--Optional:-->
                       <senderId>?</senderId>
                       <!--Optional:-->
                       <senderPassword>?</senderPassword>
                    </arg1>
                 </impl:getProductInfoByBrand>
              </soapenv:Body>
           </soapenv:Envelope>`, // This is the body part
            }
        }).then((response) => {
            console.log('RESPONSE=======', response.data);
        });

    }

    const style = {

        borderRadius: '7px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 420,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    useEffect(() => {

        axios.get('http://app.ghaarsay.com/MainCategory/GetSkuMainCategory_CustomerPage?companyID=0c5bd553-46c5-440d-8c5a-5ba3353dbf48').then((response) => {
            setMainCategory(response.data);
        });

    }, [mainCategory])

    const getData = (val) => {
        setMenu(val)
    }

    const onSignUpClick = (val) => {
        setSignIn(val)
        setSignUpBoxHeight("580px");
    }

    const onSignInClick = (val) => {
        setSignUpBoxHeight("530px");
        setSignIn(val)
        
    }

    return <>

        <Container fluid style={{ borderTop: "1px solid lightgray", }}>
            <Row style={{ width: "88%", margin: 'auto', padding: '2px' }}>
                <Col style={{ display: "flex", }} >

                    <Navbar className="navbar" light expand="md" style={{ width: "100%" }}>
                        <NavbarToggler className="toggler" onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto corner" navbar style={{ width: "100%" }}>
                                <div className="menu" style={{ width: "100%" }} >
                                    <NavItem onMouseEnter={() => { setMenu(true) }} className="menu" >
                                        <NavLink style={{ color: 'black', }}>Products <i class="fas fa-angle-down caret"></i></NavLink>
                                        {menu && <div className="position"   ><Fade bottom><SmallMenu mainCategory={mainCategory} sendData={getData} /></Fade></div>}
                                    </NavItem>

                                    <NavItem className="menu" >
                                        <NavLink onClick={soap} style={{ color: 'black' }}>Design Lab <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                    <NavItem className="menu" >
                                        <NavLink style={{ color: 'black' }}>Templates <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                    <NavItem className="menu" >
                                        <NavLink style={{ color: 'black' }}>Fundraising <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                    <NavItem className="menu" >

                                        <NavLink onClick={handleOpen} style={{color:"black"}}> Sign In  <i class="fas fa-angle-down caret"></i></NavLink>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style} style={{height:signUpBoxHeight,border:"none"}}>
                                                {signIn ?
                                                    <>
                                                        <SignInModal onSignUpClick={onSignUpClick} />
                                                    </> :
                                                    <>
                                                        <SignUpModal onSignInClick={onSignInClick} />

                                                    </>
                                                }
                                            </Box>
                                        </Modal>


                                    </NavItem>

                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>

                </Col>
            </Row>


        </Container>




    </>
}
