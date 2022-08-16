import logo from '../../assests/logo.png'
import axios from 'axios'
import swal from 'sweetalert'
import { TextField } from "@mui/material";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { Input } from "reactstrap"
import $ from 'jquery';



function SignUpModal({ onSignInClick }) {


    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit({ firstname, lastname, email, mobileNumber, password, confirmPassword }) {

        if (password != confirmPassword) return swal("Error!", `Password Not Match`, "error");
        if (!email.includes("@")) return swal("Error!", `Email not Correct`, "error");

        axios.post(`http://api.screenprint4less.com/Account/signup`, {
            firstName: firstname,  
            lastName: lastname,  
            email: email,  
            password: password,  
            confirmpassword: confirmPassword,  
            mobilenumber: mobileNumber,  
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (res) => {
                try {
                    console.log(res.status)

                    if (res.data == true) {
                        swal("Success!", `User created Successfully`, "success")
                        onSignInClick(true)
                    }
                    else {

                        swal("Error!", `${res}`, "error");
                        console.log(res)

                    }

                }
                catch (e) {
                    console.log(res.status)

                    swal("Error!", `${e}`, "error");
                    console.log('Else cond');
                }

            }
            
            )
    }


    return <>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
            <img className="" width={220} src={logo} alt='LOGO' />
        </div>

        <div style={{ display: 'flex' }}>
            <h4 style={{ fontFamily: "SharpSans1", fontSize: "18px", marginRight: "5px" }}>Already Have an Account?</h4>
            <h5 style={{ fontFamily: "SharpSans2", fontSize: "17px", cursor: "pointer" }} onClick={() => onSignInClick(true)} > SignIn</h5>
            <i style={{ marginTop: '4px', marginLeft: "6px" }} class="fas fa-arrow-right caret"></i>
        </div>
        <h2 style={{ fontFamily: "SharpSansBold", fontSize: "25px", marginBottom: "10px" }}><b> Create An Account</b></h2>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='inputFeild' type="text" placeholder="First Name" {...register("firstname", { required: true, maxLength: 80 })} />
            <input className='inputFeild' type="text" placeholder="Last Name" {...register("lastname", { required: true, maxLength: 100 })} />
            <input className='inputFeild' type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input className='inputFeild' type="tel" placeholder="(212)-456-7890." {...register("mobileNumber", { required: true, maxLength: 19 })} />
            <input className='inputFeild' type="password" placeholder="Password" {...register("password", { required: true, max: 4 })} />
            <input className='inputFeild' type="password" placeholder="Confirm Password " {...register("confirmPassword", { required: true, max: 4 })} />
            <button className="signInBtn" type='submit' style={{ fontSize: "16px" }} >Create an Account</button>
        </form>


    </>;
}

export default SignUpModal;