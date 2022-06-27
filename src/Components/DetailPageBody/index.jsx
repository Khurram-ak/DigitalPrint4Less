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
import QouteModal from "../QouteModal";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function DetailPageBody() {
    let images = [];

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {

        borderRadius: '7px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 420,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
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
                    <h3 style={{ fontSize: "21px", fontFamily: "sharpsans2" }}>Available Colors: </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'Blue' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'Red' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'Aqua' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'purple' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'gray' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'yellow' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'Red' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'Aqua' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'purple' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'gray' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'yellow' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'Red' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'Aqua' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'purple' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'gray' }} >

                        </div>
                        <div className='colorBox' style={{ marginTop: "5px", backgroundColor: 'yellow' }} >

                        </div>


                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Row >
                        <Col md='6' >
                            <div>
                                <button className="qouteBtn">START DESIGNING</button>
                            </div>
                        </Col>
                        <Col md='6' >
                            <div>
                                <button onClick={handleOpen} className="qouteBtn">Get A Qoute</button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style} style={{ height: "500", border: "none" }}>
                                        <QouteModal />
                                    </Box>
                                </Modal>
                            </div>
                        </Col>
                    </Row>
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
