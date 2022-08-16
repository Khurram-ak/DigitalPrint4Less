import { Col, Container, Row, NavItem, NavLink, NavbarToggler, Navbar, Collapse, Nav } from "reactstrap";
import logo from '../../assests/logo.png'
import headphone from '../../assests/headphone.png'
import Drawer from "./drawer.jsx"
import swal from 'sweetalert'
import $ from 'jquery';
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
import UserProfile from "../../Screens/UserProfile";
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const toggle = () => setIsOpen(!isOpen);
    const [isOpen, setIsOpen] = useState(false);
    const [mainCategory, setMainCategory] = useState()
    const [menu, setMenu] = useState(false);
    const [signIn, setSignIn] = useState(true);
    const [boxHeight, setBoxHeight] = useState("530px");
    const [open, setOpen] = useState(false);
    const [userSignIn, setUserSignIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [profileClick, setProfileClick] = useState(false);
    const [email, setEmail] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const navigate = useNavigate();


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

    const UserProfile = () => {

        setUserName(window.localStorage.getItem("Name"))
        setUserSignIn(true)
        navigate('/userProfile')

    }


    useEffect(() => {

    // let token = window.localStorage.getItem("token");

        axios.get('http://api.screenprint4less.com/ProductMainCategory/GetDisplay',)
        .then((response) => {
        setMainCategory(response.data);
        });

        if (window.localStorage.getItem("token")) {
            setUserName(window.localStorage.getItem("Name"))
            setUserSignIn(true)
        }

    }, [mainCategory])

    const getData = (val) => {
        setMenu(val)
    }

    const UserSignIn = (token) => {
        setOpen(false)
        setUserSignIn(true)
        console.log(token)
            window.localStorage.setItem("token", token);
    }



    const logOut=()=>{

        window.localStorage.removeItem("Email")
        window.localStorage.removeItem("Name")
        window.localStorage.removeItem("token")
        setUserSignIn(false)
        navigate("/home")

    }



    const onSignUpClick = (val) => {
        setSignIn(val)
        setBoxHeight("650px");
    }


    const onSignInClick = (val) => {
        setBoxHeight("530px");
        setSignIn(val)

    }
    const onForgetPass = () => {
        setSignIn(true)
        setBoxHeight("420px")
    }
    return <>
        <Container fluid>
            <Row >
                <Col md='9' className="logoCenter" style={{ display: "flex", alignItems: "center", }} >
                    <img className="logoImg" src={logo} alt='LOGO' onClick={() => navigate('/home')} />
                </Col>
                <Col md='3' style={{ display: "flex", justifyContent: "center" }} >
                    <div className="navContact ">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={headphone} alt='headphone' />
                        </div>
                        <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                            <span className="navContactText" >Talk To A Real Person</span>
                            <span className="navContactNum" >+1788542552563</span>
                            {userSignIn && <>
                                <span className="navContactText" style={{ fontFamily: "Sharpsans2 ", marginTop: "8px" }} onClick={() => UserProfile(email)} >User Name: {userName}</span>
                                <button onClick={logOut}  className="logOut"  >Log Out</button>
                              
                                {/* <span className="navContactText" style={{ fontFamily: "Sharpsans2 ", marginTop: "2px" }} >Last Logged In: Yesterday</span> */}
                            </>

                            }

                        </div>

                    </div>
                </Col>

            </Row>

        </Container>
        <br></br>
        <Container fluid style={{ borderTop: "1px solid lightgray", }}>
            <Row style={{ width: "88%", margin: 'auto', padding: '2px' }}>
                <Col style={{ display: "flex", }} >

                    <Navbar className="navbar" light expand="md" style={{ width: "100%" }}>
                        <NavbarToggler className="toggler" onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto corner menuNav" navbar style={{ width: "100%" }}>
                                <div className="menu" style={{ width: "100%" }} >
                                    <NavItem onMouseEnter={() => { setMenu(true) }} className="menu" >
                                        <NavLink style={{ color: 'black', }}>Products <i class="fas fa-angle-down caret"></i></NavLink>
                                        {menu && <div className="position"   ><Fade bottom><SmallMenu mainCategory={mainCategory} sendData={getData} /></Fade></div>}
                                    </NavItem>
                                    <NavItem className="menu" >
                                        <NavLink style={{ color: 'black' }}>Design Lab <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                    <NavItem className="menu" >
                                        <NavLink style={{ color: 'black' }}>Templates <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                    <NavItem className="menu" >
                                        <NavLink style={{ color: 'black' }} onClick={() => navigate('/userProfile')}>Fundraising <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                    <NavItem className="menu" >
                                        {userSignIn ?
                                            <NavLink style={{ color: "black" }} onClick={() => UserProfile()}> User Profile  <i class="fas fa-angle-down caret"></i></NavLink>
                                            : <>
                                                <NavLink onClick={handleOpen} style={{ color: "black" }}> Sign In  <i class="fas fa-angle-down caret"></i></NavLink>
                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style} style={{ height: boxHeight, border: "none" }}>
                                                        {signIn ?
                                                            <>
                                                                <SignInModal UserSignIn={UserSignIn} onSignUpClick={onSignUpClick} onSignInClick={onSignInClick} onForgetPass={onForgetPass} />
                                                            </> :
                                                            <>
                                                                <SignUpModal onSignInClick={onSignInClick} />

                                                            </>
                                                        }
                                                    </Box>
                                                </Modal>

                                            </>
                                        }
                                    </NavItem>

                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    {/* <Drawer className="drawer" /> */}

                </Col>
            </Row>


        </Container>




    </>
}
