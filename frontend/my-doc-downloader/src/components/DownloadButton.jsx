import React from "react";
import { Button } from "@mui/material";
import JSZip from "jszip";

const DownloadButton = ({ contactData }) => {
  const handleDownload = async () => {
    const zip = new JSZip();

    // Add all fields to a JSON file
    const jsonContent = JSON.stringify(contactData, null, 2);
    zip.file("contact-data.json", jsonContent);

    // Generate the zip file
    const blob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contact-data.zip";
    link.click();
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <Button
        variant="contained"
        color="success"
        onClick={handleDownload}
      >
        Download as Zip
      </Button>
    </div>
  );
};

export default DownloadButton;
