import React from "react";
import "./style.css"; 

function RequestForm() {
  return (
    <div className="form-container">
      <div className="glassmorphism">
        <h2 className="form-title">Raise a Blood Donation Request</h2>
        
        <form className="form">
          <input type="text" placeholder="Patient Full Name" className="input-field" />
          <input type="text" placeholder="Attendee Full Name" className="input-field" />
          <input type="text" placeholder="Attendee Phone Number" className="input-field" />

          <div className="radio-group">
            <label>Gender:</label>
            <input type="radio" name="gender" value="Male" className="radio-btn" /> Male
            <input type="radio" name="gender" value="Female" className="radio-btn" /> Female
            <input type="radio" name="gender" value="Other" className="radio-btn" /> Other
          </div>

          <input type="text" placeholder="Blood Group" className="input-field" />

          <div className="date-group">
            <input type="text" placeholder="Day" className="date-input" />
            <input type="text" placeholder="Month" className="date-input" />
            <input type="text" placeholder="Year" className="date-input" />
          </div>

          <input type="text" placeholder="Location for Donation" className="input-field" />
          <input type="text" placeholder="Quantity" className="input-field" />

          <div className="date-group">
            <input type="text" placeholder="Required Day" className="date-input" />
            <input type="text" placeholder="Month" className="date-input" />
            <input type="text" placeholder="Year" className="date-input" />
          </div>

          <input type="text" placeholder="Blood Type" className="input-field" />
          <textarea placeholder="Hospital Address" className="input-field textarea"></textarea>

          <button type="submit" className="submit-btn">Registration</button>
        </form>
      </div>
    </div>
  );
}

export default RequestForm;
