import React from 'react'
import "../StyleSheet/Info.css";
const Info = () => {
  return (
    <>
      <div className="main">
        <section className='filter'>
          <div className="form-group">
            <label for="cars">Choose your depatment : </label>

            <select className='filteropction' name="cars" id="cars">
              <option value="volvo">Health
              </option>
              <option value="saab">
                Agriculture
              </option>
              <option value="mercedes">
                Excise
              </option>
              <option value="audi">
                Department of Industries
              </option>
              <option value="saab">
                Public Works
              </option>
              <option value="mercedes">
                Law Department
              </option>
              <option value="audi">
                Highways and Minor Ports Department
              </option>
              <option value="mercedes">
                Energy Department
              </option>
              <option value="mercedes">
                Backward classes welfare
              </option>
              <option value="mercedes">
                Finance
              </option>
              <option value="mercedes">
                Consumer Affairs
              </option>
              <option value="mercedes">
                Correctional Administration
              </option>
              <option value="mercedes">
                Education
              </option>
              <option value="mercedes">
                Food and Supplies
              </option>
            </select>
          </div>
          <div className="form-group">
            <label for="cars">Select a state </label>

            <select className='filteropction' name="cars" id="cars">
            <option value="AP">Andhra Pradesh</option>
	<option value="AR">Arunachal Pradesh</option>
	<option value="AS">Assam</option>
	<option value="BR">Bihar</option>
	<option value="CT">Chhattisgarh</option>
	<option value="GA">Gujarat</option>
	<option value="HR">Haryana</option>
	<option value="HP">Himachal Pradesh</option>
	<option value="JK">Jammu and Kashmir</option>
	<option value="GA">Goa</option>
	<option value="JH">Jharkhand</option>
	<option value="KA">Karnataka</option>
	<option value="KL">Kerala</option>
	<option value="MP">Madhya Pradesh</option>
	<option value="MH">Maharashtra</option>
  <option value="MN">Manipur</option>
  <option value="ML">Meghalaya</option>
	<option value="MZ">Mizoram</option>
	<option value="NL">Nagaland</option>
	<option value="OR">Odisha</option>
	<option value="PB">Punjab</option>
	<option value="RJ">Rajasthan</option>
	<option value="SK">Sikkim</option>
	<option value="TN">Tamil Nadu</option>
	<option value="TG">Telangana</option>
	<option value="TR">Tripura</option>
	<option value="UT">Uttarakhand</option>
	<option value="UP">Uttar Pradesh</option>
	<option value="WB">West Bengal</option>
	<option value="AN">Andaman and Nicobar Islands</option>
	<option value="CH">Chandigarh</option>
	<option value="DN">Dadra and Nagar Haveli</option>
	<option value="DD">Daman and Diu</option>
	<option value="DL">Delhi</option>
	<option value="LD">Lakshadweep</option>
	<option value="PY">Puducherry</option>
            </select>
          </div>
        </section>
         
         <section className='tabledata'>
         <table>
  <tr>
    <th>Firm</th>
    <th>Amount</th>
    <th>Date</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>400000</td>
    <td>02/03/20123</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>500000</td>
    <td>04/03/2023</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>629000</td>
    <td>09/08/2023</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>980000</td>
    <td>30/03/2023</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>2300000</td>
    <td>04/02/2023</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>232900</td>
    <td>03/04/2023</td>
  </tr>
</table>
         </section>

      </div>
    </>
  )
}

export default Info