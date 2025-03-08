import React from "react";

function RequestForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-3/5">
        <h2 className="text-xl font-bold mb-4">Raise a Blood Donation Request</h2>
        
        <form className="space-y-4">
          <input type="text" placeholder="Patient Full Name" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Attendee Full Name" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Attendee Phone Number" className="w-full p-2 border rounded" />
          
          <div>
            <label className="mr-2">Gender:</label>
            <input type="radio" name="gender" value="Male" className="mr-1" /> Male
            <input type="radio" name="gender" value="Female" className="ml-4 mr-1" /> Female
            <input type="radio" name="gender" value="Other" className="ml-4 mr-1" /> Other
          </div>

          <input type="text" placeholder="Blood Group" className="w-full p-2 border rounded" />
          
          <div className="flex space-x-2">
            <input type="text" placeholder="Day" className="w-1/3 p-2 border rounded" />
            <input type="text" placeholder="Month" className="w-1/3 p-2 border rounded" />
            <input type="text" placeholder="Year" className="w-1/3 p-2 border rounded" />
          </div>

          <input type="text" placeholder="Location for Donation" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Quantity" className="w-full p-2 border rounded" />
          
          <div className="flex space-x-2">
            <input type="text" placeholder="Required Day" className="w-1/3 p-2 border rounded" />
            <input type="text" placeholder="Month" className="w-1/3 p-2 border rounded" />
            <input type="text" placeholder="Year" className="w-1/3 p-2 border rounded" />
          </div>

          <input type="text" placeholder="Blood Type" className="w-full p-2 border rounded" />
          <textarea placeholder="Hospital Address" className="w-full p-2 border rounded h-20"></textarea>
          
          <button type="submit" className="w-full bg-red-500 text-white py-2 rounded">
            Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestForm;
