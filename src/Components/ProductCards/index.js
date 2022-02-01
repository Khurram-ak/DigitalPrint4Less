
import { Card, CardGroup, CardImg, CardBody, CardSubtitle,  CardTitle } from "reactstrap"
import "./index.css"
import { useNavigate } from "react-router-dom";

export default function ProductCard({image}) {
    const navigate=useNavigate()


    return <>
        <CardGroup onClick={()=>navigate('/detailPage')} >
            <Card className="productCard  cardText">
                <CardImg
                    alt="Card image cap"
                    src={image}
                    top
                    width="100%"
                    height='250px'
                />
                <CardBody  >
                    <CardTitle style={{fontFamily:"open sans"}} tag="h5">
                        Hoodies
                    </CardTitle>
                    <CardSubtitle
                    style={{fontFamily:"roboto"}}
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Customize comfort with sweats featuring your logo or design.
                    </CardSubtitle>


                </CardBody>
            </Card>
        </CardGroup>
    </>

}





