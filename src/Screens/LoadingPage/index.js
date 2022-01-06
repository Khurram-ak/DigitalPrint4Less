// import logo from "../../Images/logo.png"
import { useState } from "react";
import { Spinner } from 'reactstrap';
import logo from "../../assests/logo.png"

const LoadingPage = () => {
   
    return <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: '100vh' }}>
                <div>
                    <img src={logo} alt="icon" width={500} />
                </div>
                <div>
                    <Spinner  style={{color:"#005F9E", height: "65px", width: "65px" }} />
                </div>


            </div>
    </>
}

export default LoadingPage
