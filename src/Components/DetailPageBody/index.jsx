import { Container, Col, Row, Button } from "reactstrap";
import ImageGallery from 'react-image-gallery';
import Fade from 'react-reveal'
import "./index.css"

import sample from '../../assests/sample.png'
import sample2 from '../../assests/sample2.png'
import sample3 from '../../assests/sample3.png'
import sample4 from '../../assests/sample4.png'

import "react-image-gallery/styles/css/image-gallery.css";


export default function DetailPageBody() {



    const images = [
        {
            original: sample,
            thumbnail: sample,
        },
        {
            original: sample2,
            thumbnail: sample2,
        },
        {
            original: sample3,
            thumbnail: sample3,
        },
    ];

    return <>
        <div style={{ borderTop: "1px solid lightgray" }}></div>
        <br/>
        <Container style={{height:"auto",marginBottom:"15px"}}>
            <Row style={{ display: "flex", cursor: 'pointer' }}>
                <Col lg="6" style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}  >
                    <ImageGallery
                        className="cartImg"
                        items={images}
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
                    <h3 style={{fontFamily:"sharpsans2"}}>POLO T-Shirt</h3>
                    <p style={{ color: "gray", fontFamily: "roboto" }}>Polo T-Shirt Pure Cotton and stretchable.Some More Description if needed.  </p>
                    <h4 style={{fontFamily:"sharpsans2"}}> Price:$25 </h4><br></br>
                    <h3 style={{ fontSize: "21px",fontFamily:"sharpsans2" }}>Available Size: </h3>

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
                    <h3 style={{ fontSize: "21px",fontFamily:"sharpsans2" }}>Color: </h3>
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
