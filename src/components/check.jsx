import { useState } from "react";

export default function Form() {
  const [personalData, setPersonalData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    Dob: "",
    sex: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form reload

    // Check if any field is empty
    if (
      !personalData.firstname ||
      !personalData.middlename ||
      !personalData.lastname ||
      !personalData.Dob ||
      !personalData.sex
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // If all fields are filled, clear error and continue
    setError("");
    console.log("Form submitted:", personalData);
    // You can navigate or handle next steps here
  };

  return (
    <div className="container">
      <div className="section1">
        <p>Image here</p>
      </div>
      <div className="section2">
        <p className="param1">Personal Details</p>
        <form className="form" onSubmit={handleSubmit}>
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
            name="middlename"
            type="text"
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
            name="lastname"
            type="text"
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
            name="Dob"
            type="text"
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
          <input
            name="sex"
            type="text"
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={personalData.sex}
            className="input"
          />

          {/* Show error message if any */}
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

          <button type="submit" className="button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
