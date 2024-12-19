// search.js

import express from "express";
import axios from "axios";

import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

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
              {
                propertyName: "email",
                operator: "EQ",
                value: query,
              },
            ],
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching contact from HubSpot:", error.message);
    res.status(500).json({ error: "Failed to fetch contact from HubSpot" });
  }
});

export default router;
