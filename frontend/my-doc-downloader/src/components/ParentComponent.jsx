import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ContactForm from "./ContactForm";
import { Box, Container, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ParentComponent = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    placeofbirth: "",
    gender: "",
    idnumber: "",
    dateofissue: "",
    expirydate: "",
    country: "",
    email: "",
  });

  const [countries, setCountries] = useState([]);
  const genderOptions = ["Male", "Female", "Prefer not to say"];

  // Fetch country list
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
    <Box style={{ height: "100vh", background: "#f7f9fc", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <AppBar position="static" style={{ background: "#004d40" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Contact Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1 }}>
        <Container
          maxWidth="sm"
          style={{
            background: "#ffffff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Search Bar */}
          <SearchBar formValues={formValues} setFormValues={setFormValues} />

          {/* Contact Form */}
          <ContactForm formValues={formValues} setFormValues={setFormValues} genderOptions={genderOptions} countries={countries} />
        </Container>
      </Box>
    </Box>
  );
};

export default ParentComponent;
