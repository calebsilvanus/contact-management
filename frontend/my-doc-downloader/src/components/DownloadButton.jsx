import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";

const DownloadButton = ({ formValues }) => {
  const handleDownload = async () => {
    const name = formValues.firstname || "contact";
    const zip = new JSZip();

    // Add the form data as a .txt file
    const formData = Object.entries(formValues)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    zip.file(`${name}.txt`, formData);

    // Generate and download the ZIP file
    try {
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `${name}.zip`);
    } catch (error) {
      console.error("Error generating ZIP file:", error);
    }
  };

  return (
    <Button
      variant="contained"
      style={{ backgroundColor: "#004d40", color: "#fff", marginTop: "16px" }}
      onClick={handleDownload}
    >
      Download as ZIP
    </Button>
  );
};

export default DownloadButton;
