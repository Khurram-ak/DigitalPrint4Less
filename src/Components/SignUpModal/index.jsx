import logo from '../../assests/logo.png'

import { TextField } from "@mui/material";
function SignUpModal({ onSignInClick}) {

    return <>
        <div style={{display:"flex",justifyContent:"center",marginBottom:"12px"}}>
            <img className="" width={220} src={logo} alt='LOGO' />
        </div>

        <div style={{ display: 'flex' }}>
        <h4 style={{ fontFamily: "SharpSans1", fontSize: "18px",marginRight:"5px" }}>Already Have an Account?</h4>
            <h5 style={{ fontFamily: "SharpSans2", fontSize: "17px",cursor:"pointer" }} onClick={()=>onSignInClick(true)} > SignIn</h5>
            <i style={{ marginTop: '4px', marginLeft: "6px" }} class="fas fa-arrow-right caret"></i>
        </div>
        <h2 style={{ fontFamily: "SharpSansBold", fontSize: "25px", marginBottom: "10px" }}><b> Create An Account</b></h2>
        <TextField id="outlined-basic" label="Name" variant="outlined" /> <br></br><br></br>
        <TextField id="outlined-basic" label="Email" variant="outlined" /> <br></br><br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" /> <br></br><br></br>
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" /> 
        <br></br><br></br>
        <button className="signInBtn" style={{fontSize:"16px"}} >Create an Account</button>
    </>;
}

export default SignUpModal;