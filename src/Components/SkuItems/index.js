
import {  Container, Row, Col } from "reactstrap";
import "./index.css"
import ProductCard from "../ProductCards"
import Slide from 'react-reveal/Slide';

import sample from '../../assests/sample.png'
import sample2 from '../../assests/sample2.png'
import sample3 from '../../assests/sample3.png'
import sample4 from '../../assests/sample4.png'


export default function SkuItems() {

    return <>
        <Container>
            <br></br>
            <Row>
                <Col>
                    <Slide top duration={3000}>
                        <h2 style={{ textAlign: 'center',fontFamily:'SharpSans2' }}>Custom T-shirts And Great Group Gear</h2>
                    </Slide>
                </Col>

            </Row>
            <Row>
                <Col style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center' }}>
                    <ProductCard image={sample} />
                    <ProductCard image={sample2} />
                    <ProductCard image={sample4}/>
                    <ProductCard image={sample3}/>
                    <ProductCard image={sample2}/>
                    <ProductCard image={sample}/>
                    <ProductCard image={sample3}/>
                    <ProductCard image={sample4}/>
                    <ProductCard image={sample}/>
                    <ProductCard image={sample2}/>
                    <ProductCard image={sample3}/>
                    <ProductCard image={sample4}/>

                </Col>
            </Row>

        </Container>


    </>
}
