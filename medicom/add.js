fetch('http://localhost:3000/addNurse', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fname: "Emma",
    lname: "Johnson",
    domains: ["pediatrics", "diabete"]
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

// Define Nurse schema
const nurseSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  domains: [String]
});

// Create Nurse model
const Nurse = mongoose.model("Nurse", nurseSchema);

// Route to search for nurses by domains
app.get("/search", async (req, res) => {
  try {
    // Extract domains from query parameters and split into array
    const { domains } = req.query;
    const domainArray = domains.split(',');

    // Find nurses with at least one matching domain
    const nurses = await Nurse.find({ domains: { $in: domainArray } });

    // Return JSON response
    res.json(nurses);
  } catch (error) {
    // Handle error
    console.error("Error searching for nurses:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to add a new nurse
app.post("/addNurse", async (req, res) => {
    try {
      // Extract nurse information from request body
      const { fname, lname, domains } = req.body;
  
      // Create a new nurse document
      const newNurse = new Nurse({ fname, lname, domains });
  
      // Save the nurse to the database
      await newNurse.save();
  
      // Return success response
      res.status(201).json({ message: "Nurse added successfully", nurse: newNurse });
    } catch (error) {
      // Handle error
      console.error("Error adding nurse:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

