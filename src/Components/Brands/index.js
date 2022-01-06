import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Fade from "react-reveal"
import Gallery from '../ProductGallery'

import brand1 from "../../assests/brand1.png"
import brand2 from "../../assests/brand2.png"
import brand3 from "../../assests/brand3.png"
import brand4 from "../../assests/brand4.png"
import brand5 from "../../assests/brand5.png"
import brand6 from "../../assests/brand6.png"
import brand7 from "../../assests/brand7.png"
import brand8 from "../../assests/brand8.png"
import brand9 from "../../assests/brand9.png"
import brand10 from "../../assests/brand10.png"
import brand11 from "../../assests/brand11.png"

import "./index.css"


export default function Brands() {

    const images = [brand1, brand9, brand3, brand5, brand7, brand9, brand2, brand4, brand6, brand7, brand9, brand8, brand10, brand11,]



    return <>
        <br></br>
        <Container fluid className='brandContainer'>
            <Row>
                <Col >
                    <>
                        <Fade top duration={3000}>
                            <h3 style={{ textAlign: "center", fontFamily: "SharpSans2" }} >Top Rated Brands</h3>
                        </Fade>
                        <br></br>
                    </>

                </Col >


            </Row>
            <Row>
                <Col>
                    <Gallery cols={7} row={1} images={images} type="brand" gap={20} />

                </Col>

            </Row>
        </Container>
    </>


}
