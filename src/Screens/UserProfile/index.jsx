import React from 'react';
import Menu from '../../Components/Menu';
import Navbar from '../../Components/Navbar';
import ProfilePageBody from '../../Components/ProfilePageBody';
import Footer from '../../Components/Footer';
import { useEffect,useState } from 'react';
import axios from "axios"
import { useParams } from "react-router-dom";

function UserProfile() {

    const [userName, setUserName] = useState("")

    // let { email } = useParams();


    // useEffect(() => {
    //     axios.get(`https://app.ghaarsay.com/UserProfile/GetUserProfile_CustomerPage?email=${email}`, {

    //     }
    //     ).then(res => {
    //         console.log(res)
    //         // setUserSignIn(true);
    //         setUserName(`${res.data.Profile.FirstName}  ${res.data.Profile.LastName}`)
    //         // console.log
    //     })


    // }, [])




    return <>
        <Navbar />
        <br></br>
        <Menu   />
        <ProfilePageBody />
        <Footer />

    </>
}

export default UserProfile;