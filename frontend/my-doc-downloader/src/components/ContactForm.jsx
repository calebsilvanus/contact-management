import React from "react";
import { TextField, MenuItem, Box } from "@mui/material";

const ContactForm = ({ formValues, setFormValues, genderOptions, countries }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box>
      <TextField
        label="First Name"
        name="firstname"
        value={formValues.firstname}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      />
      <TextField
        label="Last Name"
        name="lastname"
        value={formValues.lastname}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      />
      <TextField
        label="Date of Birth"
        name="dateofbirth"
        value={formValues.dateofbirth}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      />
      <TextField
        label="Place of Birth"
        name="placeofbirth"
        value={formValues.placeofbirth}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      />
      <TextField
        select
        label="Gender"
        name="gender"
        value={formValues.gender}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      >
        {genderOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="ID Number"
        name="idnumber"
        value={formValues.idnumber}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      />
      <TextField
        label="Date of Issue"
        name="dateofissue"
        value={formValues.dateofissue}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      />
      <TextField
        label="Expiry Date"
        name="expirydate"
        value={formValues.expirydate}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      />
      <TextField
        select
        label="Country"
        name="country"
        value={formValues.country}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      >
        {countries.map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px" }}
      />
    </Box>
  );
};

export default ContactForm;
