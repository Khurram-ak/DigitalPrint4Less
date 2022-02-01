import React from 'react'
import "./index.css"
import { Container, Row, Col, Form, FormGroup, FormFeedback, FormText, Input, Button } from 'reactstrap'
import instagram from '../../assests/instagram.png'
import pinterest from '../../assests/pinterest.png'
import twitter from '../../assests/twitter.png'
import facebook from '../../assests/facebook.png'
import video4 from '../../assests/video4.mp4'


export default function Footer() {

    return <>
        <Container fluid style={{ backgroundColor: "#f6f6f6", height: "auto" }} >
            <Row style={{ width: "95%", margin: 'auto', padding: "15px 0px" }} >
                <Col md='3' >
                    <h6 style={{ marginBottom: "10px", fontFamily: "sharpsans2" }}>WATCH OUR TV COMMERCIAL</h6>
                    <video src={video4} style={{ width: "93%" }} controls loop></video>
                    <h6 style={{ marginTop: "15px", fontFamily: "sharpsans2" }}>EMAIL SIGN-UP</h6>
                    <div>
                        <Form>
                            <FormGroup>
                                <div style={{ display: "flex", margin: "15px 0px" }}>
                                    <Input
                                        style={{ height: "40px" }}
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter Email Here"
                                        type="email"
                                    />
                                    <Button
                                        className="footerBtn"
                                    >
                                        Submit
                                    </Button>
                                </div>

                                <FormText>
                                    By clicking submit, I acknowledge I have read and accepted
                                    the <a href="#">Privacy Policy.</a>
                                </FormText>
                            </FormGroup>
                        </Form>
                    </div>

                </Col>

                <Col md='3' style={{}}>
                    <div>
                        <h6 style={{ fontFamily: "sharpsans2" }
                        }>About Us</h6>
                        <div style={{ display: "flex", flexDirection: "column", fontSize: "12px", marginBottom: "10px", fontFamily: "sharpsans1" }}>
                            <span>Get to Know Custom Ink</span>
                            <span>The Custom Ink Difference</span>
                            <span>Our Story</span>
                            <span>Careers</span>
                            <span>Press</span>
                            <span>Partnerships</span>
                            <span>Three Hearts Initiative</span>
                            <span>Customer Reviews</span>
                            <span>Weekly Photo Contest</span>
                            <span>Custom Ink Blog</span>
                            <span>Store Locations</span>
                        </div>
                        <h6 style={{ fontFamily: "sharpsans2" }}>Follow Us</h6>
                        <div style={{ display: "flex", justifyContent: "space-around", width: "60%" }}>
                            <span>
                                <img width={29} src={facebook} alt="" />
                            </span>
                            <span>
                                <img width={37} src={twitter} alt="" />
                            </span>
                            <span>
                                <img width={38} src={pinterest} alt="" />
                            </span>
                            <span>
                                <img width={35} src={instagram} alt="" />
                            </span>
                        </div>

                    </div>

                </Col>
                <Col md='3' style={{}}>
                    <h6 style={{ fontFamily: "sharpsans2" }}>Talk To A Real Person</h6>
                    <div style={{ display: "flex", flexDirection: "column", fontSize: "13px", marginBottom: "3px",fontFamily: "sharpsans1" }}>
                        <span>7 days a week </span>
                        <span>Monday-Friday: 8am - Midnight ET </span>
                        <span>Saturday: 10am - 6pm ET </span>
                        <span> Sunday: 10am - 6pm ET</span>
                        <hr />
                    </div>
                    <h6 style={{ fontFamily: "sharpsans2" }}> Holiday Hours:</h6>
                    <div style={{ display: "flex", flexDirection: "column", fontSize: "13px", marginBottom: "10px",fontFamily: "sharpsans1"  }}>
                        <span>Dec. 24th & 25th - Closed </span>
                        <span>Dec. 31st & Jan. 1st - Closed</span>

                        <hr />
                    </div>
                    <div style={{ display: 'flex',fontFamily: "sharpsans1" }}>
                        <i style={{ marginRight: "11px", fontSize: "25px", color: "#00609D", marginLeft: "-2px" }} class="fas fa-headphones"></i>
                        <p style={{ fontSize: "13px" }}>+178554522535</p>
                    </div>
                    <div style={{ display: 'flex',fontFamily: "sharpsans1" }}>
                        <i style={{ marginRight: "14px", fontSize: "25px", color: "#00609D", marginLeft: "-3px" }} class="fas fa-home"></i>
                        <p style={{ fontSize: "13px" }}>Business Address.....</p>
                    </div>
                    <div style={{ display: 'flex',fontFamily: "sharpsans1" }}>
                        <i style={{ marginRight: "15px", fontSize: "25px", color: "#00609D" }} class="fas fa-envelope"></i>
                        <p style={{ fontSize: "13px" }}>Send Us Email</p>
                    </div>


                </Col>
                <Col md='3' style={{}}>
                    <h6 style={{fontFamily: "sharpsans2"}}>Your Account</h6>
                    <div style={{ display: "flex", flexDirection: "column", fontSize: "13px", marginBottom: "3px",fontFamily: "sharpsans1" }}>
                        <span>Retrieve a Saved Design </span>
                        <span>Retrieve a Printed Proof </span>
                        <span>Track Your Order </span>
                        <span> Place a Reorder</span>
                        <hr />
                    </div>
                    <h6 style={{fontFamily: "sharpsans2"}}>Service Center</h6>
                    <div style={{ display: "flex", flexDirection: "column", fontSize: "13px", marginBottom: "3px",fontFamily: "sharpsans1" }}>
                        <span>Covid-19 FAQ </span>
                        <span>Help Center</span>
                        <span>Get a Quick Quote</span>
                        <span>Content Guidelines</span>
                        <span>Our Commitment to Accessibility</span>
                    </div>
                </Col>
            </Row>
        </Container>


    </>
}