import { useState } from "react";

export default function Location() {
  const [error, setError] = useState({});
  const [personalData, setPersonalData] = useState({
    home: "",
    state: "",
    country: "",
    nationality: "",
    occupation: "",
    marital: "",
  });
  function handleChange() {}

  function handleSubmit(e) {
    e.preventDefault();

    const formError = {}
    const validname = /^[A-Za-z\s]+$/;

    if(!personalData.home.trim()){
        formError.home ="Home address is required"
    } else if(validname.test(personalData.home)){
        formError.home = "They must be a home No"
    }
    if(!personalData.state.trim()){
        formError.state = "State is required"
    } else if(!validname.test(personalData.state)){
        formError = "Only letters are allowed";
    }
    if (!personalData.country.trim()) {
      formError.country = "State is required";
    } else if (!validname.test(personalData.country)) {
      formError = "Only letters are allowed";
    }
    if (!personalData.nationality.trim()) {
      formError.nationality = "Nationality is required";
    } else if (!validname.test(personalData.nationality)) {
      formError = "Only letters are allowed";
    }
    if (!personalData.occupation.trim()) {
      formError.occuption = "State is required";
    } else if (!validname.test(personalData.occupation)) {
      formError = "Only letters are allowed";
    }
    if (!personalData.marital.trim()) {
      formError.marital = "State is required";
    } 
    setError(formError)
    if (Object.keys(formError).length === 0) {
      console.log("Form submitted", personalData);
    }

    setPersonalData({
      home: "",
      state: "",
      country: "",
      nationality: "",
      occupation: "",
      marital: "",
    });
  }

  return (
    <div className="container">
      <div className="section1">
        <p>Image here</p>
      </div>
      <div className="section2">
        <p className="param1">Location Details</p>

        <form onSubmit={handleSubmit} className="form">
          <label className="label">Home Address</label>
          <input
            name="home"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.home}
            type="text"
            className="input"
          />
          {error.home && <p style={{ color: "red" }}>{error.home}</p>}

          <label className="label">State</label>
          <input
            name="state"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.state}
            type="text"
            className="input"
          />
          {error.state && <p style={{ color: "red" }}>{error.state}</p>}

          <label className="label">Country</label>
          <input
            name="country"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.country}
            type="text"
            className="input"
          />
          {error.country && <p style={{ color: "red" }}>{error.country}</p>}

          <label className="label">Nationality</label>
          <input
            name="nationality"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.nationality}
            type="text"
            className="input"
          />
          {error.nationality && (
            <p style={{ color: "red" }}>{error.nationality}</p>
          )}

          <label className="label">Occupation</label>
          <input
            name="occupation"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.occupation}
            type="text"
            className="input"
          />
          {error.occupation && <p style={{ color: "red" }}>{error.occupation}</p>}

          <label className="label">Marital status</label>

          <select
            name="marital"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.marital}
            className="select"
          >
            <option></option>
            <option>Single</option>
            <option>Married</option>
          </select>
          <button type="submit" className="button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
