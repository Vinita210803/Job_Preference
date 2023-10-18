
import { useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";

function Verification() {
  const [verificationCode, setVerificationCode] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
       <OtpInput
              value={verificationCode}
              onChange={setVerificationCode}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                boxSizing: "inherit",
              }}
            />
    </div>
  )
}

export default Verification
