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
    let { mainId, subId, styleCode } = useParams();

    const [allDetails, setAllDetails] = useState([]);
    const [skuDetails, setSkuDetails] = useState([]);
    const [skuImages, setSkuImages] = useState([]);
    const [colors, setColors] = useState();
    const [index, setIndex] = useState(0);
    var temp = [];
    var img = [];
    useEffect(() => {

        axios.get(`http://api.screenprint4less.com/SKU/${styleCode}/${mainId}/${subId}`)
            .then((response) => {
                setAllDetails(response.data)
                setSkuDetails(response.data[0])
                response.data.map(item => temp.push(item.coloR_NAME))
                setColors(temp)

                img.push({ original: response.data[0]?.fronT_FLAT_IMAGE_URL, thumbnail: response.data[0]?.fronT_FLAT_IMAGE_URL })
                img.push({ original: response.data[0]?.fronT_MODEL_IMAGE_URL, thumbnail: response.data[0]?.fronT_MODEL_IMAGE_URL })
                console.log(img)
                // skuImages.push({ original:allDetails[0]?.fronT_MODEL_IMAGE_URL, thumbnail:allDetails[0]?.fronT_MODEL_IMAGE_URL })
            });
        setSkuImages(img)

    }, [])


    const currentDataLoad = (index) => {
        console.log("current FUNC", allDetails[index])

        img.push({ original: allDetails[index]?.fronT_FLAT_IMAGE_URL, thumbnail: allDetails[index]?.fronT_FLAT_IMAGE_URL })
        img.push({ original: allDetails[index]?.fronT_MODEL_IMAGE_URL, thumbnail: allDetails[index]?.fronT_MODEL_IMAGE_URL })
        setSkuImages(img)

    }


    return <>
        <div style={{ borderTop: "1px solid lightgray" }}></div>
        <br />
        <Container style={{ height: "auto", marginBottom: "15px" }}>
            <Row style={{ display: "flex", cursor: 'pointer' }}>
                <Col lg="6" style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}  >
                    {skuImages && <ImageGallery
                        className="cartImg"
                        items={skuImages && skuImages}
                        // height='1500px'
                        sizes={5500}
                        thumbnailWidth={400}
                        showPlayButton={false}
                        showBullets={false}
                        useBrowserFullscreen={false}
                        autoPlay={false}
                        infinite={true}
                    />}
                </Col>

                {/* <img style={{ height: '525px', width: "350px", }} src={data?.SKUImages[0]?.ImagePath} alt='1'  */}
                <Col lg="6" style={{ padding: "20px", }}>
                    <h3 style={{ fontFamily: "sharpsans2" }}>{skuDetails.producT_TITLE}</h3>
                    <p style={{ color: "gray", fontFamily: "roboto" }}>{skuDetails.producT_DESCRIPTION}  </p>
                    <h4 style={{ fontFamily: "sharpsans2" }}> Price:${skuDetails.piecE_PRICE}  </h4><br></br>
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
                        {
                            colors?.map((item, index) => {
                                return <div onClick={() => currentDataLoad(index)} className='colorBox' style={{ marginTop: "5px", backgroundColor: item }} >

                                </div>

                            })
                        }
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
