import React, { useState } from 'react';
import "../StyleSheet/Contact.css"
const Contact = () => {
  const [data, setdata] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  })
  const InputEvent = (event)=>{
const {name,value}=event.target;
setdata((preVal)=>{
  return{
    ...preVal,[name]:value,
  }
})
  }
  const fromSubmit = (e)=>{
e.preventDefault();
alert( ` My name is ${data.fullname}, phone no is ${data.phone}, my email is ${data.email} and my message is " ${data.msg} "`)
  }
 
  return (
    <>
      <form onSubmit={fromSubmit} className='contactform'>
        <div  className="form-group">
          <label for="text">Full Name</label>
          <input   className="form-control" id="exampleFormControlTextarea1" required name='fullname'
          value={data.fullname }
          onChange={InputEvent} aria-describedby="emailHelp" placeholder="Example: Vaibhav Pandey" />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Phone Number</label>
          <input required type="number" className="form-control" id="exampleFormControlInput1"  name='phone'
          value={ data.phone}
          onChange={InputEvent} pattern="[0-9]{10}" placeholder="+0-##########" />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input required type="email" className="form-control" id="exampleFormControlInput1"  name='email'
          value={data.email }
          onChange={InputEvent} placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message </label>
          <textarea required  className="form-control" id="exampleFormControlTextarea1"  name='msg'
          value={ data.msg}
          onChange={InputEvent} rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </>
  )
}
export default Contact;
