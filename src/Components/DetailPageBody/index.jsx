import { Container, Col, Row, Button } from "reactstrap";
import ImageGallery from 'react-image-gallery';
import Fade from 'react-reveal'
import "./index.css"

import sample from '../../assests/sample.png'
import sample2 from '../../assests/sample2.png'
import sample3 from '../../assests/sample3.png'
import sample4 from '../../assests/sample4.png'

import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function DetailPageBody() {
    let images = [];


    let { skuId } = useParams();

    const [skuDetails, setSkuDetails] = useState([]);
    const [skuImages, setSkuImages] = useState([]);

    useEffect(() => {

        axios.get(`http:///app.ghaarsay.com/sku/GetSkuDetail_CustomerPage?companyID=0c5bd553-46c5-440d-8c5a-5ba3353dbf48&SkuID=${skuId}`)
            .then((response) => {

                setSkuDetails(response.data.data)
                response.data.data.SKUImages.map(item => images.push({ original: item.ImagePath, thumbnail: item.ImagePath }))
                setSkuImages(images)
            });

    }, [])

    return <>
        <div style={{ borderTop: "1px solid lightgray" }}></div>
        <br />
        <Container style={{ height: "auto", marginBottom: "15px" }}>
            <Row style={{ display: "flex", cursor: 'pointer' }}>
                <Col lg="6" style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}  >
                    <ImageGallery
                        className="cartImg"
                        items={skuImages}
                        // height='1500px'
                        sizes={5500}
                        thumbnailWidth={400}
                        showPlayButton={false}
                        showBullets={false}
                        useBrowserFullscreen={false}
                        autoPlay={false}
                        infinite={true}
                    />
                </Col>

                {/* <img style={{ height: '525px', width: "350px", }} src={data?.SKUImages[0]?.ImagePath} alt='1'  */}
                <Col lg="6" style={{ padding: "20px", }}>
                    <h3 style={{ fontFamily: "sharpsans2" }}>{skuDetails && skuDetails.SKUCode}</h3>
                    <p style={{ color: "gray", fontFamily: "roboto" }}>{skuDetails.SKUDescription}  </p>
                    <h4 style={{ fontFamily: "sharpsans2" }}> Price:${skuDetails.SalesPrice}  </h4><br></br>
                    <h3 style={{ fontSize: "21px", fontFamily: "sharpsans2" }}>Available Size: </h3>

                    <div style={{ display: 'flex' }}>

                        <div className='sizeBox' >
                            XL
                        </div>
                        <div className='sizeBox' >
                            L
                        </div>
                        <div className='sizeBox' >
                            M
                        </div>
                        <div className='sizeBox' >
                            S
                        </div>

                    </div>
                    <br></br>
                    <h3 style={{ fontSize: "21px", fontFamily: "sharpsans2" }}>Color: </h3>
                    <div style={{ display: 'flex' }}>
                        <div className='colorBox' style={{ backgroundColor: 'Blue' }} >

                        </div>
                        <div className='colorBox' style={{ backgroundColor: 'Red' }} >

                        </div>
                        <div className='colorBox' style={{ backgroundColor: 'Aqua' }} >

                        </div>


                    </div>
                    <br></br>

                </Col>
            </Row>
        </Container>

        <Container fluid >
            <Row>
                <Col md='6' style={{ height: "25px", backgroundColor: "#0020A2" }}>

                </Col>
                <Col md='6' style={{ height: "25px", backgroundColor: "#161515" }}>

                </Col>
            </Row>
        </Container>


    </>
}
