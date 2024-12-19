import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ContactForm from "./ContactForm";
import DownloadButton from "./DownloadButton";
import { Box, Container, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ParentComponent = () => {
  const [formValues, setFormValues] = useState({
    agency_id_of_agent__only_for_sub_agents_: "",
    agency_record_id_of_student: "",
    concatenated_properties: "",
    additional_information: "",
    address: "",
    city: "",
    company: "",
    contact_type: "",
    country: "",
    gender: "",
    country_of_residence: "",
    email: "",
    emergency_email: "",
    father_s_name: "",
    firstname: "",
    how_can_we_help_you_: "",
    how_did_you_find_out_about_us: "",
    lastname: "",
    mother_s_name: "",
    nationality: "",
    owner_name: "",
    personal_bank_account_details: "",
    phone: "",
    place_of_birth: "",
    referred_by_an_agent_from_agency_form: "",
    notes: "",
    department_of_interest: "",
    direct_or_transfer_student: "",
    emergency_phone_number: "",
    exam_results__waec_neco__gre__sat__etc__: "",
    language_exam_results: "",
    letter_of_intent: "",
    occupation_of_father_guardian: "",
    other: "",
    program: "",
    program_of_bachelor: "",
    program_of_master: "",
    reason_for_transfer: "",
    agency_company_of_student: "",
    field_of_study: "",
    secondary_school_name: "",
    universities_applied_to_1: "",
    universities_applied_to_2: "",
    university_of_bachelor: "",
    university_of_master: "",
  });

  const [countries, setCountries] = useState([]);
  const genderOptions = ["Male", "Female", "Prefer not to say"];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Box style={{ height: "100vh", background: "#f4f6f8", display: "flex", flexDirection: "column" }}>
      <AppBar position="static" style={{ background: "#004d40" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Contact Management</Typography>
        </Toolbar>
      </AppBar>

      <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1 }}>
        <Container
          maxWidth="md"
          style={{
            background: "#ffffff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <SearchBar formValues={formValues} setFormValues={setFormValues} />
          <ContactForm formValues={formValues} setFormValues={setFormValues} genderOptions={genderOptions} countries={countries} />
          <DownloadButton formValues={formValues} />
        </Container>
      </Box>
    </Box>
  );
};

export default ParentComponent;
