import { Container, Row, Col } from "reactstrap";
import { UncontrolledCarousel } from "reactstrap";
import banner1 from '../../assests/banner1.jpg'
import banner2 from '../../assests/banner2.jpg'
import banner3 from '../../assests/banner3.jpg'

export default function WebCarousel() {



    const data = [
        {
            key: 1,
            src:  banner1 
        },
        {
            key: 2,
            src: banner2 
        },
        {
            key: 3,
            src:  banner3 
        }
    ]



    return <>
        <UncontrolledCarousel
            style={{ height: "250px" }}
            items={data}
        />


    </>
}
