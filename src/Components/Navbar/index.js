
import { Container, Row, Col } from "reactstrap"
import logo from '../../assests/logo.png'
import headphone from '../../assests/headphone.png'
import "./index.css"



export default function Navbar() {

    return <>

        <Container fluid style={{backgroundColor:"#0020A2",}}>
            <Row style={{width:"98%",marginLeft:"auto",}}>
                <Col md='10' style={{ backgroundColor: "#0020A2", color: 'white',padding:"5px 0px" }}>
                    <div className="headerTop">
                        Custom T-shirts & Promotional Products, Fast & Free Shipping, and All-Inclusive Pricing
                    </div>

                </Col>
                <Col md='2' style={{ backgroundColor: "#212020", color: 'white', padding:"5px 10px"}}>
                    <div className="headerTop">
                        Help Center |  Your Account
                    </div>

                </Col>
            </Row>
            

        </Container>

        <Container fluid>
        <Row>
                <Col md='9' >
                    <img className="logoImg" src={logo} alt='LOGO' />
                </Col>

                <Col md='3' >
                    <div className="navContact ">
                        <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
                            <img src={headphone} alt='headphone' />
                        </div>
                        <div style={{marginLeft:"10px", display: 'flex',flexDirection:'column', justifyContent: 'center', }}>
                            <span className="navContactText" >Talk To A Real Person</span>
                            <span className="navContactNum" >+1788542552563</span>
                        </div>

                    </div>
                </Col>

            </Row>

        </Container>

    </>
}
