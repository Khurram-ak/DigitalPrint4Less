
import { Card, CardGroup, CardImg, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"
import "./index.css"

export default function ProductCard({image}) {
    return <>
        <CardGroup>
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





