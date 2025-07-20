import { useState } from "react";

export default function HForm() {
  const [errors, setErrors] = useState({});
  const [personalData, setPersonalData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    Dob: "",
    sex: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const validName = /^[A-Za-z\s]+$/;

    if (!personalData.firstname.trim()) {
      newErrors.firstname = "First name is required";
    } else if (!validName.test(personalData.firstname)) {
      newErrors.firstname = "Only letters allowed";
    }

    if (!personalData.middlename.trim()) {
      newErrors.middlename = "Middle name is required";
    } else if (!validName.test(personalData.middlename)) {
      newErrors.middlename = "Only letters allowed";
    }

    if (!personalData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    } else if (!validName.test(personalData.lastname)) {
      newErrors.lastname = "Only letters allowed";
    }

    if (!personalData.Dob) {
      newErrors.Dob = "Date of birth is required";
    }

    if (!personalData.sex) {
      newErrors.sex = "Sex is required";
    } else if (!["Male", "Female"].includes(personalData.sex)) {
      newErrors.sex = "Sex must be 'Male' or 'Female'";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No errors: submit data
      console.log("Form submitted", personalData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input
        type="text"
        name="firstname"
        value={personalData.firstname}
        onChange={handleChange}
      />
      {errors.firstname && <p style={{ color: "red" }}>{errors.firstname}</p>}

      <label>Middle Name</label>
      <input
        type="text"
        name="middlename"
        value={personalData.middlename}
        onChange={handleChange}
      />
      {errors.middlename && <p style={{ color: "red" }}>{errors.middlename}</p>}

      <label>Last Name</label>
      <input
        type="text"
        name="lastname"
        value={personalData.lastname}
        onChange={handleChange}
      />
      {errors.lastname && <p style={{ color: "red" }}>{errors.lastname}</p>}

      <label>Date of Birth</label>
      <input
        type="date"
        name="Dob"
        value={personalData.Dob}
        onChange={handleChange}
      />
      {errors.Dob && <p style={{ color: "red" }}>{errors.Dob}</p>}

      <label>Sex</label>
      <input
        type="text"
        name="sex"
        value={personalData.sex}
        onChange={handleChange}
        placeholder="Male or Female"
      />
      {errors.sex && <p style={{ color: "red" }}>{errors.sex}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
