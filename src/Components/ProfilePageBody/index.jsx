import { Container, Row, Col } from "reactstrap";
import { TextField } from "@mui/material";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import swal from 'sweetalert'

function ProfilePageBody() {
    const [billingAddress, setBillingAddress] = useState([{ billingAddress: ""}]);

    const [shippingAddress, setShippingAddress] = useState([{ shippingAddress: "" }]);

    const [userProfileData, setUserProfileData] = useState({})
    let token = window.localStorage.getItem("token");
    let email = window.localStorage.getItem("email");
    let password = window.localStorage.getItem("password");
   
    useEffect(async () => {
        //USER DETAILS
        axios.post(`http://api.screenprint4less.com/Account/GetUser`,{
    
            "email":email,
            "password": password
            
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        ).then((res) => {
            setUserProfileData(res.data)
        })

        //Billing Address
        axios.get(`http://api.screenprint4less.com/CustomerShippingAddress`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        ).then((res) => {
            setShippingAddress(res.data)
        })
        
        //Shipping Address
        axios.get(`http://api.screenprint4less.com/CustomerBillingAddress`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        ).then((res) => {
            if (res.length != 0) {
                setBillingAddress(res.data)
            }
        })

    }, [])

 

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...shippingAddress];
        list[index][name] = value;
        setShippingAddress(list);
    };

    const handleAddClick = () => {
        setShippingAddress([...shippingAddress, { shippingAddress: "" }]);
    };

    const handleInputBillChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...billingAddress];
        list[index][name] = value;
        setBillingAddress(list);
    };

    const handleAddBillClick = () => {
        setBillingAddress([...billingAddress, { billingAddress: "" }]);
    };
    
    const onSubmitBtn = () => {
        setShippingAddress([...shippingAddress, { shippingAddress: "" }]);
        setBillingAddress([...billingAddress, { billingAddress: "" }]);

        shippingAddress.map(item=>{
            axios.post(`http://api.screenprint4less.com/CustomerShippingAddress`, {
                "ShippingAddress": item.shippingAddress
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
            ).then((res) => {
                console.log('shipping',res)

            })
        })

        billingAddress.map(item=>{
            axios.post(`http://api.screenprint4less.com/CustomerBillingAddress`, {
                "BillingAddress": item.billingAddress
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
            ).then((res) => {
                swal("Success!", `User Details Updated`, "success")

            })
        })
        
    }


    return <>
        <div style={{ borderTop: "1px solid lightgray" }}>
            <br></br>
            <Container>
                <Row>
                    <h4 style={{ fontFamily: "SharpSans2", textAlign: "center", fontSize: "26px" }}>User Profile</h4>
                </Row>
                <Row>
                    <Col md="2" style={{ display: "flex", alignItems: "center" }}>
                        <h5 style={{ fontFamily: "SharpSans1" }}>First Name:</h5>
                    </Col>
                    <Col md="5">
                        <TextField value={userProfileData.firstName} id="outlined-basic" label={!userProfileData.firstName && "Enter First Name"} variant="outlined" />
                    </Col>
                </Row><br></br>
                <Row>
                    <Col md="2" style={{ display: "flex", alignItems: "center" }}>
                        <h5 style={{ fontFamily: "SharpSans1" }}>Last Name:</h5>
                    </Col>
                    <Col md="5">
                        <TextField value={userProfileData.lastName} id="outlined-basic" label={!userProfileData.lastName && "Enter Last Name "} variant="outlined" />
                    </Col>
                </Row><br></br>
                <Row>
                    <Col md="2" style={{ display: "flex", alignItems: "center" }}>
                        <h5 style={{ fontFamily: "SharpSans1" }}>Email:</h5>
                    </Col>
                    <Col md="5">
                        <TextField value={email} id="outlined-basic" label={!email && "Enter Email "} variant="outlined" />
                    </Col>
                </Row><br></br>
                <Row>
                    <Col md="2" style={{ display: "flex", alignItems: "center" }}>
                        <h5 style={{ fontFamily: "SharpSans1" }}>Mobile Number:</h5>
                    </Col>
                    <Col md="5">
                        <TextField value={userProfileData.mobileNumber} id="outlined-basic" label={!userProfileData.mobileNumber && "Enter Mobile Number "} variant="outlined" />
                    </Col>
                </Row><br></br>

                <Row>
                    <div className="App">
                    {billingAddress?.map((item, i) => {
                            return (
                                <div className="box" style={{ marginTop: "5px" }}>
                                    <Row>
                                        <Col md="2" style={{ display: "flex", alignItems: "center" }}>
                                            <h5 style={{ fontFamily: "SharpSans1" }}>Billing Address {i + 1}:</h5>
                                        </Col>
                                        <Col style={{ display: "flex", alignItems: "center" }} >
                                            <TextField name="billingAddress"
                                                value={item.billingAddress}
                                                onChange={e => handleInputBillChange(e, i)}
                                                id="outlined-basic"
                                                label={!item.billingAddress && "Enter Billing Address "}
                                                variant="outlined" />
                                            {billingAddress?.length - 1 === i && <i onClick={handleAddBillClick} style={{ marginLeft: "6px", fontSize: "30px" }} class="fa-solid fa-circle-down"></i>}
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}


                    </div>
                </Row><br></br>
                <Row>
                    <div className="App">
                        {shippingAddress?.map((item, i) => {
                            return (
                                <div className="box" style={{ marginTop: "5px" }}>
                                    <Row>
                                        <Col md="2" style={{ display: "flex", alignItems: "center" }}>
                                            <h5 style={{ fontFamily: "SharpSans1" }}>Shipping Address {i + 1}:</h5>
                                        </Col>
                                        <Col style={{ display: "flex", alignItems: "center" }} >
                                            <TextField name="shippingAddress"
                                                value={item.shippingAddress}
                                                onChange={e => handleInputChange(e, i)}
                                                id="outlined-basic"
                                                label={!item.shippingAddress && "Enter Shipping Address "}
                                                variant="outlined" />
                                            {shippingAddress?.length - 1 === i && <i onClick={handleAddClick} style={{ marginLeft: "6px", fontSize: "30px" }} class="fa-solid fa-circle-down"></i>}
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}


                    </div>
                </Row><br></br>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col md="4">
                        <div>
                            <button onClick={onSubmitBtn} className="qouteBtn" style={{ backgroundColor: "#0020A2" }}>Submit</button>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
            </Container>

        </div>

    </>
}

export default ProfilePageBody;



// {shippingAddress?.map((item, i) => {
//     return (
//         <div className="box" style={{ marginTop: "5px" }}>
//             <Row>
//                 <Col md="2" style={{ display: "flex", alignItems: "center" }}>
//                     <h5 style={{ fontFamily: "SharpSans1" }}>Shipping Address {i + 1}:</h5>
//                 </Col>
//                 <Col style={{ display: "flex", alignItems: "center" }} >
//                     <TextField onChange={(e) => setTempShippingAddress(e.target.value)} value={item?.shippingAddress} id="outlined-basic" label={!item.shippingAddress && "Enter Shipping Address "} variant="outlined" />
//                     {shippingAddress?.length - 1 === i && <i onClick={ShippingAddClick} style={{ marginLeft: "6px", fontSize: "30px" }} class="fa-solid fa-circle-down"></i>}
//                 </Col>
//             </Row>
//         </div>
//     );
// })}