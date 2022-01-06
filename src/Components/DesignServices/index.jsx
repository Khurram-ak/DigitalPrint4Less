import { Container, Col, Row, Button } from "reactstrap";
import './index.css'
import logo2 from '../../assests/logo2.png'
import designImage from '../../assests/designImage.png'

export default function DesignServices() {

    return <>


        <Container style={{ border: "2px solid lightgray", padding: "40px 0px",boxShadow:"1px 2px 17px gray" ,borderRadius:"60px 0px 60px 0px"}}>
            <Row>
                <Col md='6' className="serviceBox">
                    <div>
                        <img src={logo2} width={240} style={{ marginLeft: "-6px" }} alt="" />
                        <h2 style={{fontFamily:"SharpSansBold",color:"#005F9E"}}>Design Services</h2>
                        <p style={{fontFamily:"SharpSans1"}}>Your Inspiration <br />Our Artist <br />Custom Design </p>
                        <Button
                            className="creativeBtn"
                        >
                            Get Creative
                        </Button>
                    </div>
                </Col>
                <Col md='1' style={{ display: 'flex', justifyContent: "", alignItems: 'center' }}>
                    <div style={{ height: "208px", border: "1px solid #b7b7b7" }}>

                    </div>
                </Col>
                <Col md='5' style={{ display: 'flex', justifyContent: "", alignItems: "center" }}>
                    <img className="designImg" src={designImage} alt="img" />
                </Col>
            </Row>

        </Container>


    </>

}








