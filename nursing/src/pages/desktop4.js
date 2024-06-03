import React, { useState } from 'react';
import { Button as MuiButton, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './desktop4.css';

const Desktop4 = () => {
  const navigate = useNavigate();
  const [offerData, setOfferData] = useState({
    medicalConditions: '',
    allergies: '',
    currentMedications: '',
    currentSymptoms: '',
    dateOfBirth: '',
    fullName: '',
    gender: '',
    phoneNumber: '',
    address: ''
  });

 

  const handleChange = (e) => {
    setOfferData({ ...offerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/offers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offerData),
      });
      const data = await response.json();
      console.log('Offer created successfully:', data);
      navigate('/desktop-3');
    } catch (error) {
      console.error('Error creating offer:', error);
    }
  };

  return (
    <div className="desktop4-container">
      <div className="form-wrapper">
        <h2>Submit an Offer</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <TextField
            label="Medical Conditions"
            name="medicalConditions"
            value={offerData.medicalConditions}
            onChange={handleChange}
            variant="filled"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Allergies"
            name="allergies"
            value={offerData.allergies}
            onChange={handleChange}
            variant="filled"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Current Medications"
            name="currentMedications"
            value={offerData.currentMedications}
            onChange={handleChange}
            variant="filled"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Current Symptoms"
            name="currentSymptoms"
            value={offerData.currentSymptoms}
            onChange={handleChange}
            variant="filled"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            value={offerData.dateOfBirth}
            onChange={handleChange}
            variant="filled"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Full Name"
            name="fullName"
            value={offerData.fullName}
            onChange={handleChange}
            variant="filled"
            fullWidth
            margin="normal"
            required
          />
          <FormControl component="fieldset" margin="normal" required>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={offerData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={offerData.phoneNumber}
            onChange={handleChange}
            variant="filled"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Address"
            name="address"
            value={offerData.address}
            onChange={handleChange}
            variant="filled"
            fullWidth
            margin="normal"
            required
          />
          <MuiButton
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Submit Offer
          </MuiButton>
        </form>
      </div>
    </div>
  );
};

export default Desktop4;
