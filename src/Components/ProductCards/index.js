
import { Card, CardGroup, CardImg, CardBody, CardSubtitle, CardTitle } from "reactstrap"
import "./index.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import sample3 from '../../assests/sample3.png'


export default function ProductCard({ skuList }) {
    const navigate = useNavigate()
    // ('skuItems==============', skuList.SKUImages.map(item=>('aasdasdasd',item.ImagePath)));
    console.log('skusss',skuList);
    const [skuImage, setSkuImage] = useState('')
    const [productId, setProductId] = useState('')

    useEffect(() => {
        setSkuImage(skuList.SKUImages.map(item=>item.ImagePath))
        setProductId(skuList.ID)
    }, [skuList])


    return <>
        <CardGroup onClick={() =>
             {      
                 navigate(`/detailPage/${productId}`)
             }} >
            <Card className="productCard  cardText">
                <CardImg
                    alt="Card image cap"
                    src={skuImage || sample3}
                    top
                    width="100%"
                    height='250px'
                />
                <CardBody  >
                    <CardTitle style={{ fontFamily: "open sans", fontSize: "19px" }} tag="h5">
                        {skuList.SKUCode}
                    </CardTitle>
                    <CardSubtitle
                        style={{ fontFamily: "roboto", fontSize: "15px" }}
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {skuList.SKUDescription}
                    </CardSubtitle>


                </CardBody>
            </Card>
        </CardGroup>
    </>

}





