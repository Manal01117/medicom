import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button as MuiButton,
} from "@mui/material";
import { Button, IconButton as ChakraIconButton } from "@chakra-ui/react";
import Property1Variant21 from "./property1-variant21";
import "./desktop1.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Desktop11 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      localStorage.setItem("userData", JSON.stringify(data[data.length - 1]));
      data.pop();
      localStorage.setItem("demandes", JSON.stringify(data));
      navigate("/desktop-5"); // Navigate to nurse profile page
      
    } catch (error) {
      console.error("Error creating nurse:", error);
    }
  };

  return (
    <div className="desktop-2">
      <div className="desktop-21">
        <form onSubmit={handleSubmit} className="property-1default-group">
          <div>
          <TextField
            className="property-1default"
            color="primary"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            type="email"
          
            sx={{ "& .MuiInputBase-root": { height: "69px" }, width: "373px" }}
            required
          />
          <TextField
            className="property-1variant2"
            color="primary"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            type="password"
            sx={{ "& .MuiInputBase-root": { height: "69px" }, width: "373px" }}
            required
          />
          </div>
          <MuiButton
          type="submit"
          className="Se-connecter1"
          color="primary"
          variant="contained"
          w="255px"
          >
          Se connecter
        </MuiButton>
        </form>
        <div className="property-1variant2-wrapper5">
          <Property1Variant21 />
        </div>
        
        <Link to="/nurse-new-account">
        <Button
          className="nouvel-compte1"
          colorScheme="grey"
          variant="ghost"
          w="241px"
        >
          nouvel compte
        </Button></Link>
        <Link to="/">
        <MuiButton
          className="patiente3"
          disableElevation={true}
          color="primary"
          variant="text"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 221, height: 50 }}
        >
          Patient(e)?
        </MuiButton></Link>
        <b className="medicom1">MediCom</b>
        <b className="infirmier3">Infirmier</b>
      </div>
    </div>
  );
};

export default Desktop11;
