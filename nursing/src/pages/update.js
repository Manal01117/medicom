import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button as MuiButton } from "@mui/material";
import { Button } from "@chakra-ui/react";
import "./update.css"; // Import the CSS file for styling

const UpdateNurseAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    domains: "",
    experience: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const _id = userData ? userData._id : null;

      if (!_id) {
        throw new Error("User ID not found in localStorage");
      }

      const formattedFormData = {
        ...formData,
        domains: formData.domains.split(",").map((domain) => domain.trim()),
      };

      const response = await fetch(`http://localhost:5000/update/${_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedFormData),
      });

      if (!response.ok) {
        throw new Error("Failed to update nurse account");
      }

      const data = await response.json();
      localStorage.setItem("userData", JSON.stringify(data));
      console.log("Nurse account updated:", data);
      navigate("/desktop-5"); // Navigate to nurse profile page
    } catch (error) {
      console.error("Error updating nurse account:", error);
    }
  };

  const handleBack = () => {
    navigate("/desktop-5");
  };

  return (
    <div className="update-nurse-account">
      <h2>Update Account</h2>
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
            label="Availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
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
          Update Account
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

export default UpdateNurseAccount;
