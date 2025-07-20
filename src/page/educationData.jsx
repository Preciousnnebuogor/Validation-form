import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Education() {
    const navigate = useNavigate();
  const [error, setError] = useState({});
  const [personalData, setPersonalData] = useState({
    institution: "",
    Discipline: "",
    entry: "",
    graduate: "",
    Grades: "",
  });
  

  function handleSubmit(e) {
    e.preventDefault();

    const formError = {}
    const validname = /^[A-Za-z\s]+$/;

    if(!personalData.institution.trim()){
        formError.institution ="Institution is required"
    } else if(validname.test(personalData.institution)){
        formError.institution = "Only letters are allowed";
    }
    if(!personalData.Discipline.trim()){
        formError.Discipline = "Discipline is required"
    } else if(!validname.test(personalData.Discipline)){
        formError.Discipline = "Only letters are allowed";
    }
    
    if (!personalData.entry.trim()) {
      formError.entry = "Date of entry is required";
    } 
    if (!personalData.graduate.trim()) {
      formError.graduate = "Date of graduation is required";
    } 
    if (!personalData.Grades.trim()) {
      formError.Grades = "Grade is required";
    } 
    setError(formError)
    if (Object.keys(formError).length === 0) {
      console.log("Form submitted", personalData);
    

    setPersonalData({
      institution: "",
      Discipline: "",
      entry: "",
      graduate: "",
      Grades: "",
    });
    navigate("/others");
  }
}

  return (
    <div className="container">
      <div className="section1">
        <img
          src="/assets/girl.jpeg"
          style={{
            width: "100%",
            maxHeight: "100vh",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="section2">
        <p className="param1">Education Details</p>

        <form onSubmit={handleSubmit} className="form">
          <label className="label">Name of Institution</label>
          <input
            name="institution"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.institution}
            type="text"
            className="input"
          />
          {error.institution && (
            <p style={{ color: "red" }}>{error.institution}</p>
          )}

          <label className="label">Discipline</label>
          <input
            name="Discipline"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.Discipline}
            type="text"
            className="input"
          />
          {error.Discipline && (
            <p style={{ color: "red" }}>{error.Discipline}</p>
          )}

          <label className="label">Date of Entry</label>
          <input
            name="entry"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.entry}
            type="date"
            className="input"
          />
          {error.entry && <p style={{ color: "red" }}>{error.entry}</p>}

          <label className="label">Date of Graduated</label>
          <input
            name="graduate"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.graduate}
            type="date"
            className="input"
          />
          {error.graduate && <p style={{ color: "red" }}>{error.graduate}</p>}

          <label className="label">Grades</label>

          <select
            name="Grades"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.Grades}
            className="select"
          >
            <option></option>
            <option>First Class</option>
            <option>Second Class</option>
            <option>Third Class</option>
            <option>Pass</option>
            <option>Distinction</option>
            <option>Upper Credit</option>
            <option>Lower Credit</option>
            <option>Fail</option>
          </select>
          {error.Grades && (
            <p style={{ color: "red" }}>{error.Grades}</p>
          )}
          <button type="submit" className="button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
