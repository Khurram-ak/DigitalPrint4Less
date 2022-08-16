
import { Container, Row, Col } from "reactstrap";
import "./index.css"
import ProductCard from "../ProductCards"
import Slide from 'react-reveal/Slide';
 
import { useEffect, useState } from 'react'

export default function SkuItems() {

    const [skuItems, setSkuItems] = useState()
    useEffect(() => {

        fetch('http://api.screenprint4less.com/SKU/36C09645-3BF6-431D-8923-0FDA1BE4A257/C3FCB00C-DA08-43F3-AAE2-F08E0A09136E')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setSkuItems(res)})

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
