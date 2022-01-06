import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../Components/Menu";
import Navbar from "../../Components/Navbar";
import WebCarousel from "../../Components/WebCarousel";
import SkuItems from "../../Components/SkuItems";
import Brands from "../../Components/Brands";
import DesignServices from "../../Components/DesignServices";
import Features from "../../Components/Features";
import Vision from "../../Components/Vision";
import Footer from "../../Components/Footer";
import LoadingPage from "../LoadingPage"

export default function Home() {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    setTimeout(() => {
        setLoading(true)

    }, 3000);


    return <>
        {!loading ? <LoadingPage/> : <>
            <Navbar />
            <br></br>
            <Menu />
            <WebCarousel />
            <br></br>
            <SkuItems />
            <br></br>
            <Brands />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <DesignServices />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Features />
            <br></br>
            <br></br>
            <Vision />
            <br></br>
            <br></br>
            <Footer />
        </>
        }



    </>

}
