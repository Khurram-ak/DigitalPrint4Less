import logo from '../../assests/logo.png'
import axios from 'axios'
import swal from 'sweetalert'
import $ from 'jquery';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { TextField } from "@mui/material";
import { useState } from 'react';


function SignInModal({ onSignUpClick, onForgetPass, onSignInClick, UserSignIn }) {

    var navigate = useNavigate();
    const [forgetPassword, setForgetPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [notification, setNotification] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit({ email, password }) {



        axios.post(`http://api.screenprint4less.com/Account/login`, {
            email: email,
            password: password,

        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (res) => {
                try {

                    if (res.status == 200) {
                        swal("Success!", `User SignIn Successfully`, "success")
                        window.localStorage.setItem("email", email);
                        window.localStorage.setItem("password", password);
                        axios.post(`http://api.screenprint4less.com/Account/GetUser`, {
                            email: email,
                            password: password,

                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then(res => {
                                window.localStorage.setItem("Name", res.data.firstName + " " + res.data.lastName);
                            })
                        setTimeout(() => {
                            UserSignIn(res.data)
                        }, 1500);
                    }
                    else {
                        swal("Error!", `wrong Email or Password`, "error")

                    }
                }
                catch (e) {
                    swal("Error!", `${e}`, "error");
                }

            })


    }

    function forgetPasswordApi() {
        axios.get(`https://app.ghaarsay.com/Account/ForgotPasswordApiGetP?Email=${email}`)
            .then(res => {
                res.data.result == "OK" && setNotification(true)
                setEmail(" ")
            })

    }

    function signInPage() {
        setForgetPassword(false)
        onSignInClick(true)
    }


    return <>

        {forgetPassword ? <>
            <div style={{ display: "flex", alignItems: " center", justifyContent: "start", marginBottom: "12px" }}>
                <i style={{ fontSize: "25px", marginRight: "15px", cursor: "pointer" }} onClick={signInPage} class="fa-solid fa-arrow-left"></i>

                <img className="" width={250} src={logo} alt='LOGO' />
            </div>
            <h4 style={{ marginTop: "30px", fontFamily: "SharpSans2", fontSize: "20px" }}>Enter Email</h4>
            <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" /> <br></br><br></br>
            {notification && <h4 style={{ fontFamily: "SharpSans1", fontSize: "18px" }}>Please check your e-mail. It may take some time and also check the junk e-mail folder.</h4>}

            <button className="signInBtn" onClick={() => {
                forgetPasswordApi()
            }} >Submit</button>

        </> : <>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                <img className="" width={220} src={logo} alt='LOGO' />
            </div>
            <h4 style={{ fontFamily: "SharpSans1", fontSize: "18px" }}>Sign in for faster checkout!</h4>
            <h4 style={{ fontFamily: "SharpSans2", fontSize: "20px" }}> Don’t have an account with us?</h4>
            <div style={{ display: 'flex' }}>
                <h5 style={{ fontFamily: "SharpSans2", fontSize: "17px", cursor: "pointer" }} onClick={() => onSignUpClick(false)}>Create account </h5>
                <i style={{ marginTop: '2px', marginLeft: "6px" }} class="fas fa-arrow-right caret"></i>
            </div><br></br>
            <h2 style={{ fontFamily: "SharpSansBold", fontSize: "25px", marginBottom: "10px" }}><b> Sign In With Email</b></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='inputFeild' type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input className='inputFeild' type="password" placeholder="Password" {...register("password", { required: true, max: 4 })} />
                <br></br><br></br>
                <button className="signInBtn" >Sign in</button>
            </form>
            <h5 onClick={() => {
                setForgetPassword(true)
                onForgetPass()
            }} style={{ fontFamily: "SharpSans2", fontSize: "14px", marginTop: "15px", cursor: "pointer" }}>Forgot Password? </h5>
        </>
        }


    </>;
}

export default SignInModal;