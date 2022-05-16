
import { Container, Row, Col } from "reactstrap";
import "./index.css"
import ProductCard from "../ProductCards"
import Slide from 'react-reveal/Slide';

import sample from '../../assests/sample.png'
import sample2 from '../../assests/sample2.png'
import sample3 from '../../assests/sample3.png'
import sample4 from '../../assests/sample4.png'
import { useEffect, useState } from 'react'

export default function SkuItems() {

    const [skuItems, setSkuItems] = useState()
    useEffect(() => {

        fetch('http:///app.ghaarsay.com//sku/GetSku_CustomerPage?page=1&pageSize=10&companyID=0c5bd553-46c5-440d-8c5a-5ba3353dbf48')
            .then(res => res.json())
            .then(res => {
                setSkuItems(res.data)})

    }, [])



    return <>
        <Container>
            <br></br>
            <Row>
                <Col>
                    <Slide top duration={3000}>
                        <h2 style={{ textAlign: 'center', fontFamily: 'SharpSans2' }}>Custom T-shirts And Great Group Gear</h2>
                    </Slide>
                </Col>

            </Row>
            <Row>
                <Col style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center' }}>
                    {skuItems && skuItems.map((item,index) => {
                        return <ProductCard   skuList={item}  key={index}/>

                    })}


                </Col>
            </Row>

        </Container>


    </>
}
