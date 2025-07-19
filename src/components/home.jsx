import { useState } from "react";
import { SiV2Ex } from "react-icons/si";

export default function Home() {
  const [error, setError] = useState({})
  const [personalData, setPersonalData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    Dob: "",
    sex: "",
  });

  function handleSubmit(e){
     e.preventDefault();
 if (
   !personalData.firstname ||
   !personalData.middlename ||
   !personalData.lastname ||
   !personalData.Dob ||
   !personalData.sex
 ) 
 {setError("Please fill in all fields.");
 return;}
  

 }

 

  return (
    <div className="container">
      <div className="section1">
        <p>Image here</p>
      </div>
      <div className="section2">
        <p className="param1">Personal Details</p>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">First Name</label>
          <input
            name="firstname"
            type="text"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.firstname}
            className="input"
          />

          <label className="label">Middle Name</label>
          <input
            type="text"
            name="middlename"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.middlename}
            className="input"
          />

          <label className="label">Last Name</label>
          <input
            type="text"
            name="lastname"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.lastname}
            className="input"
          />

          <label className="label">Date of Birth</label>
          <input
            type="date"
            name="Dob"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.Dob}
            className="input"
          />

          <label className="label">Sex</label>

          <select
            name="sex"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.sex}
            className="select"
          >
            <option></option>
            <option>Female</option>
            <option>Male</option>
          </select>
          <button type="submit" className="button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
