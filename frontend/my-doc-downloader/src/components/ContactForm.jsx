import React from "react";
import { TextField, MenuItem, Box, Checkbox, FormControlLabel } from "@mui/material";

const ContactForm = ({ formValues, setFormValues, genderOptions, countries }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const getFieldBorderColor = (value) => (value ? "green" : "red");

  const fields = [
    "agency_id_of_agent__only_for_sub_agents_",
    "agency_record_id_of_student",
    "concatenated_properties",
    "additional_information",
    "address",
    "city",
    "company",
    "contact_type",
    "country",
    "gender",
    "country_of_residence",
    "email",
    "emergency_email",
    "father_s_name",
    "firstname",
    "how_can_we_help_you_",
    "how_did_you_find_out_about_us",
    "lastname",
    "mother_s_name",
    "nationality",
    "owner_name",
    "personal_bank_account_details",
    "phone",
    "place_of_birth",
    "referred_by_an_agent_from_agency_form",
    "notes",
    "department_of_interest",
    "direct_or_transfer_student",
    "emergency_phone_number",
    "exam_results__waec_neco__gre__sat__etc__",
    "language_exam_results",
    "letter_of_intent",
    "occupation_of_father_guardian",
    "other",
    "program",
    "program_of_bachelor",
    "program_of_master",
    "reason_for_transfer",
    "agency_company_of_student",
    "field_of_study",
    "secondary_school_name",
    "universities_applied_to_1",
    "universities_applied_to_2",
    "university_of_bachelor",
    "university_of_master",
  ];

  return (
    <Box>
      {fields.map((field) => (
        <TextField
          key={field}
          label={field.replace(/_/g, " ")}
          name={field}
          value={formValues[field]}
          onChange={handleChange}
          fullWidth
          style={{
            marginBottom: "16px",
            borderColor: getFieldBorderColor(formValues[field]),
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "4px",
          }}
        />
      ))}

      {/* Gender Dropdown */}
      <TextField
        select
        label="Gender"
        name="gender"
        value={formValues.gender}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px", borderColor: getFieldBorderColor(formValues.gender) }}
      >
        {genderOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      {/* Country Dropdown */}
      <TextField
        select
        label="Country"
        name="country"
        value={formValues.country}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "16px", borderColor: getFieldBorderColor(formValues.country) }}
      >
        {countries.map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default ContactForm;
import React from "react";
import { TextField, MenuItem, Box, Checkbox, FormControlLabel } from "@mui/material";

const ContactForm = ({ formValues, setFormValues, genderOptions, countries }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const getFieldBorderColor = (value) => (value ? "green" : "red");

  const fields = [
    "agency_id_of_agent__only_for_sub_agents_",
    "agency_record_id_of_student",
    "concatenated_properties",
    "additional_information",
    "address",
    "city",
    "company",
    "contact_type",
    "country",
    "gender",
    "country_of_residence",
    "email",
    "emergency_email",
    "father_s_name",
    "firstname",
    "how_can_we_help_you_",
    "how_did_you_find_out_about_us",
    "lastname",
    "mother_s_name",
    "nationality",
    "owner_name",
    "personal_bank_account_details",
    "phone",
    "place_of_birth",
    "referred_by_an_agent_from_agency_form",
    "notes",
    "department_of_interest",
    "direct_or_transfer_student",
    "emergency_phone_number",
    "exam_results__waec_neco__gre__sat__etc__",
    "language_exam_results",
    "letter_of_intent",
    "occupation_of_father_guardian",
    "other",
    "program",
    "program_of_bachelor",
    "program_of_master",
    "reason_for_transfer",
    "agency_company_of_student",
    "field_of_study",
    "secondary_school_name",
    "universities_applied_to_1",
    "universities_applied_to_2",
    "university_of_bachelor",
    "university_of_master",
  ];

  const renderTextField = (field) => (
    <TextField
      key={field}
      label={field.replace(/_/g, " ")}
      name={field}
      value={formValues[field]}
      onChange={handleChange}
      fullWidth
      style={{
        marginBottom: "16px",
        borderColor: getFieldBorderColor(formValues[field]),
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "4px",
      }}
    />
  );

  const renderSelectField = (label, name, options) => (
    <TextField
      select
      label={label}
      name={name}
      value={formValues[name]}
      onChange={handleChange}
      fullWidth
      style={{ marginBottom: "16px", borderColor: getFieldBorderColor(formValues[name]) }}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );

  return (
    <Box>
      {fields.map((field) => {
        if (field === "gender") {
          return renderSelectField("Gender", field, genderOptions);
        } else if (field === "country") {
          return renderSelectField("Country", field, countries);
        } else {
          return renderTextField(field);
        }
      })}
    </Box>
  );
};

export default ContactForm;