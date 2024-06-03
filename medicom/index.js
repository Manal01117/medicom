// server.js
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const crypto = require('crypto');
const Nurse = require('./models/Nurse');
const Offer = require("./models/Offer");
const secretKey = crypto.randomBytes(32).toString('hex');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


  app.use(
    session({
      secret: secretKey, // Secret key to sign the session ID cookie
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/session-store',
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // Session duration: 1 day (in milliseconds)
        secure: false, // Set to true in production if using HTTPS
        httpOnly: true, // Ensures cookies are only accessible via HTTP(S) and not JS
      },
    })
  );


// Route to search for nurses by domains
app.get("/search", async (req, res) => {
  try {
    // Extract domains from query parameters and split into array
    const { domains } = req.query;
    const domainArray = domains.split(',');

    // Find nurses with at least one matching domain
    const nurses = await Nurse.find({ domains: { $in: domainArray } });
    console.log(nurses[0].get("_id").toString())
    // Return JSON response
    res.json(nurses);
  } catch (error) {
    // Handle error
    console.error("Error searching for nurses:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Create a POST endpoint to handle nurse creation
app.post("/nurses", async (req, res) => {
  try {
    const newNurse = await Nurse.create(req.body);
    req.session.userId = newNurse._id;
    res.status(201).json(newNurse);
    console.log(newNurse);
  } catch (error) {
    res.status(500).json({ error: "Failed to create nurse" });
    console.log("Error searching for nurses:", error);
  }
});

// Create a POST endpoint to handle nurse creation
app.post("/update/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const up = await Nurse.findByIdAndUpdate(req.params.id,{$set: req.body});
    const newNurse = await Nurse.findById(req.params.id);
    req.session.userId = newNurse._id;
    res.status(201).json(newNurse);
    console.log(newNurse);
  } catch (error) {
    res.status(500).json({ error: "Failed to create nurse" });
    console.log("Error searching for nurses:", error);
  }
});



// Connect nurse
app.post("/connect", async (req, res) => {
  try {
    const nurse = await Nurse.findOne({ email: { $in: req.body.email }, password: {$in: req.body.password} });
    //const demande = await Offer.find();
    const result = await Offer.find();
    result.push(nurse);
    req.session.userId = nurse._id;
    res.status(201).json(result);
    
    console.log(result);
    console.log(result.length);
    result.pop();
    console.log(result.length);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to create nurse" });
  }
});

// POST endpoint to create a new offer
app.post("/offers", async (req, res) => {
  try {
    const newOffer = await Offer.create(req.body);
    res.status(201).json(newOffer);
  } catch (error) {
    console.error("Error creating offer:", error);
    res.status(500).json({ error: "Failed to create offer" });
  }
});





app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
