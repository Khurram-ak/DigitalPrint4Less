import { Col, Container, Row } from "reactstrap";


export default function Menu() {

    

    return <>

        <Container fluid style={{ borderTop: "1px solid lightgray",  }}>
            <Row style={{ width: "88%", margin: 'auto', padding: '10px' }}>
                <Col >
                    <div className="menu" style={{ display: "flex", justifyContent: "space-around" }}>
                        <span>Products</span>
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
