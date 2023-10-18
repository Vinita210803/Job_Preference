import React from 'react';
import Common from './Common';
import axios from "axios"

// home page
const Home=()=>{
  const pay=async (e)=>{
    const {data:{order}}=await axios.post("http://localhost:8000/checkout",{
      amount:23
    }) 
    var options = {
      "key": "rzp_test_s4eixBam5fm16I", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "https://localhost:8000/paymentverification",
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const rzp1 = new Razorpay(options);

      rzp1.open();

  }


  return(
    <>
   <Common name="Here connect with Government for Transaction in ferms!!!" firstvisit="/info" firstbtname="Get Info" secondvisit="/pay" secondbtname="Pay"></Common>
   <button onClick={pay}>pay</button>

    </>
  )
}
export default Home;
