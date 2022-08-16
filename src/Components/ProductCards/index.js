
import { Card, CardGroup, CardImg, CardBody, CardSubtitle, CardTitle } from "reactstrap"
import "./index.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import sample3 from '../../assests/sample3.png'


export default function ProductCard({ skuList }) {
    const navigate = useNavigate()
    console.log('skusss',skuList);
    
    const [skuImage, setSkuImage] = useState('')
    const [productId, setProductId] = useState('')

    useEffect(() => {
    }, [skuList])


    return <>
        <CardGroup onClick={() =>
             {      
                 navigate(`/detailPage/${productId}`)
             }} >
            <Card className="productCard  cardText">
                <CardImg
                    alt="Card image cap"
                    src={skuList.fronT_MODEL_IMAGE_URL}
                    top
                    width="100%"
                    height='250px'
                />
                <CardBody  >
                    <CardTitle style={{ fontFamily: "SharpSansBold", fontSize: "19px",fontWeight:"800",color:"#0020A2" }} tag="h5">
                        {skuList.stylE_NO}
                    </CardTitle>
                    <CardTitle style={{ fontFamily: "open sans", fontSize: "19px",fontWeight:"600" }} tag="h5">
                        {skuList.producT_TITLE}
                    </CardTitle>
                    <CardSubtitle
                        style={{ fontFamily: "roboto", fontSize: "17px",fontWeight:"700" }}
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Price Starting from : ${skuList.piecE_PRICE}
                    </CardSubtitle>


                </CardBody>
            </Card>
        </CardGroup>
    </>

}





