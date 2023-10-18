import axios from "axios";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../StyleSheet/Verification.css"
function Verification() {
  const [verificationCode, setVerificationCode] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const verify = async (e) => {
    try {
      const res = await axios.post("http://localhost:8000/verify", {
        email: location.state.email,
        verificationCode: verificationCode,
      });
      console.log(res.data);
      if (res.data.status) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("check verification code");
    }
  };
  return (
    <main>

    <div className="innerdiv">
    <h1 className="otptext">Verify your OTP</h1>
      <OtpInput
        value={verificationCode}
        onChange={setVerificationCode}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        
        />

      <button  className="otpbtn" onClick={verify}>verify</button>
    </div>
        </main>
  );
}

export default Verification;
