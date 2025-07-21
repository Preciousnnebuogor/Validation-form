import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Location() {
   const navigate = useNavigate();
  const [error, setError] = useState({});
  const [personalData, setPersonalData] = useState({
    home: "",
    state: "",
    country: "",
    nationality: "",
    city: "",
    
  });
  
   useEffect(() => {
       const saved = localStorage.getItem("othersData");
       if (saved) {
         setPersonalData(JSON.parse(saved));
       }
     }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const formError = {};
    const validname = /^[A-Za-z\s]+$/;

    if (!personalData.home.trim()) {
      formError.home = "Home address is required";
    } else if (validname.test(personalData.home)) {
      formError.home = "They must be a home No";
    }
    if (!personalData.state.trim()) {
      formError.state = "State is required";
    } else if (!validname.test(personalData.state)) {
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
    if (!personalData.city.trim()) {
      formError.occuption = "City is required";
    } else if (!validname.test(personalData.city)) {
      formError = "Only letters are allowed";
    }
    
    setError(formError);
    if (Object.keys(formError).length === 0) {
      console.log("Form submitted", personalData);
      localStorage.setItem("othersData", JSON.stringify(personalData));

      // setPersonalData({
      //   home: "",
      //   state: "",
      //   country: "",
      //   nationality: "",
      //   city: "",
      // });

      navigate("/education");
    }
  }

  function handlePrev() {
    navigate(-1);
  }


  return (
    <div className="container">
      <div className="section1">
        <img
          src="/assets/boy2.jpeg"
          style={{
            width: "100%",
            maxHeight: "100vh",
            objectFit: "contain",
            backgroundColor: "white",
          }}
        />
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

          <label className="label">City</label>
          <input
            name="city"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.city}
            type="text"
            className="input"
          />
          {error.city && <p style={{ color: "red" }}>{error.city}</p>}

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

          <div className="buttDiv">
            <button type="button" onClick={handlePrev} className="button">
              Previous
            </button>
            <button type="submit" className="button">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
