
import { Container, Row, Col } from "reactstrap"
import logo from '../../assests/logo.png'
import headphone from '../../assests/headphone.png'
import "./index.css"
import { useNavigate } from "react-router-dom"



export default function Navbar() {

    const navigate = useNavigate()

    return <>

        <Container fluid style={{ backgroundColor: "#0020A2", }}>
            <Row style={{ width: "98%", marginLeft: "auto", }}>
                    <div style={{width:"80%",backgroundColor: "#0020A2", color: 'white', padding: "5px 0px" }}  className="headerTopL">
                        Custom T-shirts & Promotional Products, Fast & Free Shipping, and All-Inclusive Pricing
                    </div>
                    <div style={{width:"20%",backgroundColor: "#212020", color: 'white', padding: "5px 10px" }} className="headerTopR">
                        Help Center |  Your Account
                    </div>

            </Row>


        </Container>

     

    </>
}
