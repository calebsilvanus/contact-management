import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

// Route for searching contacts
router.post("/search", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await axios.post(
      "https://api.hubapi.com/crm/v3/objects/contacts/search",
      {
        filterGroups: [
          {
            filters: [
              { propertyName: "email", operator: "CONTAINS_TOKEN", value: query },
            ],
          },
        ],
        properties: [
          "firstname", 
          "lastname", 
          "email", 
          "createdate", 
          "lastmodifieddate",
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Transform response to handle null values and provide defaults
    const transformedResults = response.data.results.map((contact) => ({
      id: contact.id,
      properties: {
        firstname: contact.properties.firstname || "N/A", // Default to "N/A" if null
        lastname: contact.properties.lastname || "N/A",
        email: contact.properties.email || "N/A",
        createdate: contact.properties.createdate || "N/A",
        lastmodifieddate: contact.properties.lastmodifieddate || "N/A",
      },
    }));

    res.status(200).json({ total: response.data.total, results: transformedResults });
  } catch (error) {
    console.error("Error fetching contacts from HubSpot:", error.message);
    res.status(500).json({ error: "Failed to fetch contacts from HubSpot" });
  }
});

export default router;
