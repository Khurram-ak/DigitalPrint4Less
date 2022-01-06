import { Container, Col, Row, Button } from "reactstrap";
import './index.css'
import logo2 from '../../assests/logo2.png'
import mission from '../../assests/mission.jpg'

export default function DesignServices() {

    return <>


        <Container style={{ border: "2px solid lightgray", padding: "40px 0px",boxShadow:"1px 2px 17px gray" ,borderRadius:"60px 0px 60px 0px"}}>
            <Row>
                <Col md='6' style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <img className="visionImg" src={mission} alt="img" />
                </Col>
                <Col md='1' style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: "208px", border: "1px solid #b7b7b7" }}>

                    </div>
                </Col>
                <Col md='4' className="serviceBox">
                    <div>
                        <h2 style={{fontFamily:"SharpSansBold",color:"#005F9E"}}>Our <br />Mission<br/>& Vision</h2>
                        <p style={{fontFamily:"SharpSans1"}}> Lorem ipsum dolor sit amet.ipsum dolor<br/> sit amet.ipsum dolor sit amet.ipsum dac ipsum dolor. <br/>Lorem ipsum dolor sit amet consectetur. </p>
                    </div>
                </Col>
            </Row>


        </Container>
            <br/>
            <br/>
            <br/>
        <Container fluid >
            <Row>
                <Col md='6' style={{height:"25px" ,backgroundColor:"#0020A2"}}>

                </Col>
                <Col md='6' style={{height:"25px" ,backgroundColor:"#161515"}}>

                </Col>
            </Row>
        </Container>


    </>

}








