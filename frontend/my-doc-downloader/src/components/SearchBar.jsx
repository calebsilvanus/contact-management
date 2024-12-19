import React, { useState } from "react";
import { TextField, IconButton, MenuItem, CircularProgress, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ formValues, setFormValues }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const BASE_URL = "http://localhost:5000/api"; // Update this URL if needed

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      alert("Please enter a search query.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchInput }),
      });

      const data = await response.json();
      if (response.ok && data.results?.length > 0) {
        setSearchResults(data.results);
      } else {
        alert("No results found.");
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      alert("An error occurred while searching.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSelect = (contact) => {
    setFormValues({ ...formValues, ...contact.properties });
    setSearchResults([]);
    setSearchInput("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "16px" }}>
      {/* Search Input */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <TextField
          variant="outlined"
          placeholder="Enter email, first name, or last name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          fullWidth
        />
        <IconButton onClick={handleSearch} disabled={isLoading} color="primary">
          {isLoading ? <CircularProgress size={24} /> : <SearchIcon />}
        </IconButton>
      </div>

      {/* Search Results Dropdown */}
      {searchResults.length > 0 && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            maxHeight: "300px",
            overflowY: "auto",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            marginTop: "8px",
            background: "#fff",
          }}
        >
          {searchResults.map((result, index) => (
            <MenuItem
              key={index}
              onClick={() => handleContactSelect(result)}
              style={{ display: "flex", alignItems: "center" }}
            >
              <ListItemAvatar>
                <Avatar src="https://via.placeholder.com/40" alt="Contact Avatar" />
              </ListItemAvatar>
              <ListItemText
                primary={`${result.properties.firstname || ""} ${result.properties.lastname || ""}`}
                secondary={result.properties.email || "No Email"}
              />
            </MenuItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
