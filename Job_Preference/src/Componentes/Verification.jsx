
import axios from "axios";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import "../StyleSheet/Verification.css"
function Verification() {
  const [verificationCode, setVerificationCode] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const verify= async(e)=>{
    const res=axios.post('http://localhost:8000/verify',{
      verificationCode:verificationCode
    })
  }
  return (
    <>

    <main>
    <div className="innerdiv">
<h1 className="otptext">Verify your OTP~</h1>
       <OtpInput
              value={verificationCode}
              onChange={setVerificationCode}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              // inputStyle={{
              //   boxSizing: "border-box",
              // }}
            />
            <button className="otpbtn" onClick={verify}>Submit OTP</button>
    </div>

    </main>
    </>
  )
}

export default Verification
