import { Col, Container, Row ,NavItem,NavLink} from "reactstrap";
import { useState } from 'react'
import SmallMenu from "../SmallMenu";
import { Fade } from "react-reveal";
import './index.css'

export default function Menu() {


    const [menu, setMenu] = useState(false);

    return <>

        <Container fluid style={{ borderTop: "1px solid lightgray", }}>
            <Row style={{ width: "88%", margin: 'auto', padding: '10px' }}>
                <Col >
                    <div className="menu" style={{ display: "flex", justifyContent: "space-around" }}>

                        <span onMouseEnter={() => { setMenu(true) }}  >Products</span>
                        {menu && <div className="position" onMouseLeave={() => { setMenu(false) }} onMouseEnter={() => { setMenu(true) }}><Fade bottom>  <SmallMenu  /></Fade></div>}


                        <span >Design Lab</span>

                        <span >Templates</span>

                        <span >Fundraising</span>

                        <span >Your Account</span>
                    </div>
                </Col>
            </Row>


        </Container>




    </>
}
