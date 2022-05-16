import { Container, Row, Col } from "reactstrap";
import { UncontrolledCarousel } from "reactstrap";
import banner1 from '../../assests/banner1.jpg'
import banner2 from '../../assests/banner2.jpg'
import banner3 from '../../assests/banner3.jpg'
import { useEffect, useState } from 'react'

export default function WebCarousel() {

    const [banners, setBanners] = useState();

    useEffect(() => {
        fetch('http:///app.ghaarsay.com/CompanyProfile/GetBanners_CustomerPage?companyID=0c5bd553-46c5-440d-8c5a-5ba3353dbf48')
            .then(res => res.json())
            .then(res => {
                setBanners(res.data)
            }
            )


    }, [])


    const data = [
        {
            key: 1,
            src: banner1,
        },

    ]
    banners && banners.map((item, index) => data.push({
        key: index,
        src: item.bannerURL
    }))


    return <>
        <UncontrolledCarousel
            className='bannerHeigth'
            items={data}
            
        />


    </>
}
