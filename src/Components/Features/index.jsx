import { Container, Row, Col } from "reactstrap";
import { Card, CardHeader, CardImg, CardBody, CardText, CardTitle } from "reactstrap"
import "./index.css"
import headphone2 from "../../assests/headphone2.png"
import email from "../../assests/email.png"
import review from "../../assests/review.png"

export default function Features() {

    return <>
        <Container fluid style={{ backgroundColor: "#EDEDED", height: "auto", }}>
         
            <Row style={{ height: "auto",padding:"18px 0px" }}>
                <Col style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <h5 style={{fontFamily:"sharpsans2"}}>WE’RE HERE TO HELP</h5>
                    <h4 style={{fontFamily:"sharpsans2"}}>Incredible Service. All-inclusive Pricing. Real Love.</h4>
                </Col>
            </Row>
            <Row className="featureRow">
                <Col md='4' style={{paddingBottom:"34px"}} >
                    <div className="featureCard">
                        <Card style={{height:"auto",}}>
                            <CardHeader style={{ textAlign: "center", fontFamily: "sharpsans1" }}>
                                Talk to a Real Person
                            </CardHeader>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/318/180"
                                top
                                width="100%"
                            />
                            <CardBody>

                                <CardTitle tag="h4" style={{ textAlign: "center", fontFamily: "sharpsans2" }} >
                                    An Inker By Your Side
                                </CardTitle>
                                <CardText style={{ textAlign: "center", fontFamily: "sharpsans1", fontSize: "13px" }}>
                                    Need help with your design or
                                    order?Call us, chat us, or send us
                                    an email - we’d love to talk to you!
                                </CardText>
                                <Col style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: "center" }}>
                                            <img src={headphone2} width={30} alt="" />
                                        </div>
                                        <p style={{ paddingTop: "5px", fontSize: "10px", fontFamily: "sharpsans1", textAlign: "center" }}>Call Now</p>
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: "center" }}>
                                            <img src={email} width={30} alt="" />
                                        </div>
                                        <p style={{ paddingTop: "12px", fontSize: "10px", fontFamily: "sharpsans1", textAlign: "center" }}>Email</p>
                                    </div>

                                </Col>
                                <Col style={{ display: 'flex', justifyContent: "center" }}>
                                    <a href="#" style={{ textAlign: "center", paddingTop: "1px", fontSize: "12px", fontFamily: "sharpsans1" }}>Contact Us</a>

                                </Col>


                            </CardBody>

                        </Card>
                    </div>
                </Col>
                
                <Col md='4'style={{paddingBottom:"34px"}} >
                    <div className="featureCard">
                        <Card style={{height:"auto",}} >
                            <CardHeader style={{ textAlign: "center", fontFamily: "sharpsans1" }}>
                            Live And Uncensored
                            </CardHeader>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/318/180"
                                top
                                width="100%"
                            />
                            <CardBody>

                                <CardTitle tag="h4" style={{ textAlign: "center", fontFamily: "sharpsans2" }} >
                                    Customer Reviews
                                </CardTitle>
                                <Col style={{ width: "95%", margin: "auto", display: "flex", justifyContent:"center" }}>
                                  
                                  <img src={review} alt="img" style={{height:"128px",width:"280"}} />

                                </Col>


                                <Col style={{ display: 'flex', justifyContent: "center" }}>
                                    <a href="#" style={{ textAlign: "center", paddingTop: "15px", fontSize: "12px", fontFamily: "sharpsans1" }}>See All Reviews</a>

                                </Col>


                            </CardBody>

                        </Card>
                    </div>
                </Col>
                <Col md='4'style={{paddingBottom:"34px"}} >
                    <div className="featureCard">
                        <Card style={{height:"auto",}} >
                            <CardHeader style={{ textAlign: "center", fontFamily: "sharpsans1" }}>
                                All-in Pricing
                            </CardHeader>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/318/180"
                                top
                                width="100%"
                            />
                            <CardBody>

                                <CardTitle tag="h4" style={{ textAlign: "center", fontFamily: "sharpsans2" }} >
                                    Your Price Includes:
                                </CardTitle>
                                <Col style={{ width: "80%", margin: "auto", display: "flex", flexDirection: 'column', alignItems: "flex-start" }}>
                                    <div>
                                        <i style={{color:"blue",marginRight:'10px',marginTop:"8px",fontSize:"13px"}} class="fas fa-check"></i>
                                        <span style={{ fontSize: "10px", fontFamily: "sharpsans1", textAlign: "center" }}>Expert Help, 7 Days a Week</span>
                                    </div>
                                    <div>
                                        <i style={{color:"blue",marginRight:'10px',marginTop:"8px",fontSize:"13px"}} class="fas fa-check"></i>
                                        <span style={{ fontSize: "10px", fontFamily: "sharpsans1", textAlign: "center" }}>Price Breaks.</span>
                                    </div>
                                    <div>
                                        <i style={{color:"blue",marginRight:'10px',marginTop:"8px",fontSize:"13px"}} class="fas fa-check"></i>
                                        <span style={{ fontSize: "10px", fontFamily: "sharpsans1", textAlign: "center" }}>Exclusive Artwork & Fonts.</span>
                                    </div>
                                    <div>
                                        <i style={{color:"blue",marginRight:'10px',marginTop:"8px",fontSize:"13px"}} class="fas fa-check"></i>
                                        <span style={{ fontSize: "10px", fontFamily: "sharpsans1", textAlign: "center" }}>FREE Design Review.</span>
                                    </div>
                                    <div>
                                        <i style={{color:"blue",marginRight:'10px',marginTop:"8px",fontSize:"13px"}} class="fas fa-check"></i>
                                        <span style={{ fontSize: "10px", fontFamily: "sharpsans1", textAlign: "center" }}>FREE Shipping.</span>
                                    </div>

                                </Col>


                                <Col style={{ display: 'flex', justifyContent: "center" }}>
                                    <a href="#" style={{ textAlign: "center", paddingTop: "15px", fontSize: "12px", fontFamily: "sharpsans1" }}>Learn More</a>

                                </Col>


                            </CardBody>

                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>


    </>



}
