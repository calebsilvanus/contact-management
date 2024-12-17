import React from "react";
import ParentComponent from "./components/ParentComponent";
import { AppBar, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#f4f6f8" }}>
      {/* Navbar */}
      <AppBar position="static" style={{ backgroundColor: "#004d40" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Document Downloader
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Parent Component */}
      <ParentComponent />
    </div>
  );
}

export default App;
