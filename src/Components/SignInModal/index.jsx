import logo from '../../assests/logo.png'

import { TextField } from "@mui/material";
function SignInModal({ onSignUpClick }) {

    return <>
        <div style={{display:"flex",justifyContent:"center",marginBottom:"12px"}}>
            <img className="" width={220} src={logo} alt='LOGO' />
        </div>

        <h4 style={{ fontFamily: "SharpSans1", fontSize: "18px" }}>Sign in for faster checkout!</h4>
        <h4 style={{ fontFamily: "SharpSans2", fontSize: "20px" }}> Don’t have an account with us?</h4>
        <div style={{ display: 'flex' }}>
            <h5 style={{ fontFamily: "SharpSans2", fontSize: "17px",cursor:"pointer" }} onClick={() => onSignUpClick(false)}>Create account </h5>
            <i style={{ marginTop: '2px', marginLeft: "6px" }} class="fas fa-arrow-right caret"></i>
        </div><br></br>
        <h2 style={{ fontFamily: "SharpSansBold", fontSize: "25px", marginBottom: "10px" }}><b> Sign In With Email</b></h2>
        <TextField id="outlined-basic" label="Email" variant="outlined" /> <br></br><br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <br></br><br></br>
        <button className="signInBtn" >Sign in</button>
        <h5 style={{ fontFamily: "SharpSans2", fontSize: "14px", marginTop: "15px" }}>Forgot Password? </h5>
    </>;
}

export default SignInModal;