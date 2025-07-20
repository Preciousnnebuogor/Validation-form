import { useState } from "react";

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
 
     const formError = {}
     const validname = /^[A-Za-z\s]+$/;

     if(!personalData.firstname.trim()){
        formError.firstname = "First name is required"
     } else if(!validname.test(personalData.firstname)){
        formError.firstname = "Only letters are allowed"
     }
     if (!personalData.lastname.trim()) {
       formError.lastname = "Last name is required";
     } else if (!validname.test(personalData.lastname)) {
       formError.firstname = "Only letters are allowed";
     }
     if (!personalData.middlename.trim()) {
       formError.middlename = "Middle name is required";
     } else if (!validname.test(personalData.middlename)) {
       formError.middlename = "Only letters are allowed";
     }
    if(!personalData.Dob){
        formError.Dob ="Date of birth is required"
    }
    if(!personalData.sex){
        formError.sex ="Sex is required"
    }
     setError(formError)
     if (Object.keys(formError).length === 0){
         console.log("Form submitted", personalData);
     }
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
          {error.firstname && <p style={{ color: "red" }}>{error.firstname}</p>}
         

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
          {error.middlename && (
            <p style={{ color: "red" }}>{error.middlename}</p>
          )}

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
          {error.lastname && <p style={{ color: "red" }}>{error.lastname}</p>}

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
          {error.Dob && <p style={{ color: "red" }}>{error.Dob}</p>}
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
            {error.sex && <p style={{ color: "red" }}>{error.sex}</p>}
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
