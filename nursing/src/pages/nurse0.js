import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button as MuiButton } from "@mui/material";
import { Button } from "@chakra-ui/react";
import "./nurse0.css"; // Import the CSS file for styling

const NurseNewAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    domains: [String],
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(e.target.name==='domains'){
      setFormData({...formData,[e.target.name]: e.target.value.split(',')})
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/nurses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      localStorage.setItem("userData", JSON.stringify(data));
      // Assuming data contains the newly created nurse's information
      console.log("New nurse created:", data);
      navigate("/desktop-5"); // Navigate to nurse profile page
    } catch (error) {
      console.error("Error creating nurse:", error);
    }
  };

  const handleBack = () => {
    // Handle back button click
    navigate("/desktop-2");
  };

  return (
    <div className="nurse-new-account">
      <h2>Create New Nurse Account</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            required
          />
          <TextField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            required
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Domains"
            name="domains"
            value={formData.domains}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Experience (years)"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Short Bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </div>
        <MuiButton
          type="submit"
          variant="contained"
          color="primary"
          className="submit-button"
        >
          Create Account
        </MuiButton>
      </form>
      <Button
        variant="outline"
        colorScheme="orange"
        width="auto"
        mt={4}
        onClick={handleBack}
      >
        Back
      </Button>
    </div>
  );
};

export default NurseNewAccount;
