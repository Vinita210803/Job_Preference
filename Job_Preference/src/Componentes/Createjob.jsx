import React from 'react'
import "../StyleSheet/Createjob.css";

const Createjob = () => {
  return (
    <>
    <section className='createjobmain'>

           <form >
           <div className="form-group">
           <label for="cars">Choose a car:</label>

<select className='form-control' name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
           </div>
        <div  className="form-group">
          <label for="text">Your Name</label>
          <input  type="text" className="form-control" id="exampleFormControlTextarea1" required name='fullname'
        aria-describedby="emailHelp" placeholder="Example: Vaibhav Pandey" />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Amount of Project</label>
          <input required type="number" className="form-control" id="exampleFormControlInput1"  name='phone'
        pattern="[0-9]{10}" placeholder="example :- 20000 to 30000" />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Worker Number</label>
          <input required type="email" className="form-control" id="exampleFormControlInput1"  name='email'
         placeholder="example :- 10" />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Starting date</label>
          <input type="date" className="form-control" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
          
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Ending date</label>
          <input type="date" className="form-control" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
          
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Time of Shift </label>
          <input required type="number" className="form-control" id="exampleFormControlInput1"  name='phone'
        pattern="[0-9]{10}" placeholder="example :- 7Am to 6Pm " />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">About the Job</label>
          <textarea required  className="form-control" id="exampleFormControlTextarea1"  name='msg'
         rows="3" placeholder="example :- ........."></textarea>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Skills</label>
          <textarea required  className="form-control" id="exampleFormControlTextarea1"  name='msg'
         rows="3" placeholder="example :- 5am to 5pm"></textarea>
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>

      </form>



      <div className="map">
        <h1>image h yha pe</h1>
        
      </div>
    </section>
    </>
  )
}

export default Createjob