import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Fade from "react-reveal"
import Gallery from '../ProductGallery'
 
import brand11 from "../../assests/brand11.png"

import "./index.css"


export default function Brands() {

    const [brands,setBrands]=useState()
    const brandObj=[]

    useEffect(()=>{
        fetch('http://app.ghaarsay.com/Brand/GetBrands_CustomerPage?companyID=0c5bd553-46c5-440d-8c5a-5ba3353dbf48')
        .then(res=>res.json())
        .then(res=>{
            console.log(res.data);
            setBrands(res.data)})

    },[])

    brands && brands.map(item=>brandObj.push({image: item.BImageURL,name:item.BrandName}))
    // brands && brands.map(item=>brandName.push(item.BrandName))

    return <>
        <br></br>
        <Container fluid className='brandContainer'>
            <Row>
                <Col >
                    <>
                        <Fade top duration={3000}>
                            <h3 style={{ textAlign: "center", fontFamily:"SharpSans2" }} >Top Rated Brands</h3>
                        </Fade>
                        <br></br>
                    </>

                </Col >


            </Row>
            <Row>
                <Col>

                    <Gallery cols={7} row={1}  brandObj={brandObj} type="brand" gap={20} />

                </Col>

            </Row>
        </Container>
    </>


}
