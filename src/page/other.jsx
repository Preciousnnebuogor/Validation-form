import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Others() {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [personalData, setPersonalData] = useState({
    mobile: "",
    occupation: "",
    marital: "",
    soo: "",
    village: "",
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

    if (!personalData.occupation.trim()) {
      formError.occupation = "Occupation is required";
    } else if (!validname.test(personalData.occupation)) {
      formError.occupation = "Only letters are allowed";
    }

    const validmobile = /^[0-9]{10,15}$/;
    if (!personalData.mobile.trim()) {
      formError.mobile = "Phone number is required";
    } else if (!validmobile.test(personalData.mobile)) {
      formError.mobile = "Only numbers are allowed";
    }

    if (!personalData.soo.trim()) {
      formError.soo = "State of origin number is required";
    } else if (!validname.test(personalData.soo)) {
      formError.soo = "Only letters are allowed";
    }

    if (!personalData.village.trim()) {
      formError.village = "village is required";
    } else if (!validname.test(personalData.village)) {
      formError.village = "Only letters are allowed";
    }

    if (!personalData.marital.trim()) {
      formError.marital = "Marital status is required";
    }

    setError(formError);
    if (Object.keys(formError).length === 0) {
      console.log("Form submitted", personalData);

      localStorage.setItem("othersData", JSON.stringify(personalData));

      // inside the component:

      //   setPersonalData({
      //     mobile: "",
      //     occupation: "",
      //     marital: "",
      //     soo: "",
      //     village: "",
      //   });
      navigate("/final");
    }
   
  }

  function handlePrev() {
    navigate(-1); 
  }

  return (
    <div className="container">
      <div className="section1">
        <img
          src="/assets/look.jpeg"
          style={{
            width: "100%",
            maxHeight: "100vh",
            objectFit: "cover",
            backgroundColor: "white",
          }}
        />
      </div>
      <div className="section2">
        <p className="param1">Other Details</p>

        <form onSubmit={handleSubmit} className="form">
          <label className="label">Phone number</label>
          <input
            name="mobile"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.mobile}
            type="tel"
            className="input"
          />
          {error.mobile && <p style={{ color: "red" }}>{error.mobile}</p>}

          <label className="label">State of Origin</label>
          <input
            name="soo"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.soo}
            type="text"
            className="input"
          />
          {error.soo && <p style={{ color: "red" }}>{error.soo}</p>}

          <label className="label">Village</label>
          <input
            name="village"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.village}
            type="text"
            className="input"
          />
          {error.village && <p style={{ color: "red" }}>{error.village}</p>}

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
          {error.occupation && (
            <p style={{ color: "red" }}>{error.occupation}</p>
          )}

          <label className="label">Marital Status</label>

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
          {error.marital && <p style={{ color: "red" }}>{error.marital}</p>}

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
