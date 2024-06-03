import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import {
  Button as ChakraButton,
  IconButton as ChakraIconButton,
} from "@chakra-ui/react";
import RectangleComponent from "../components/rectangle-component";
import Property1Variant6 from "../components/property1-variant6";
import "./desktop5.css";
import { Link } from "react-router-dom";
const Desktop5 = () => {
  return (
    <div className="desktop-8">
      <RectangleComponent
        rectangleDivWidth="360px"
        rectangleDivHeight="1024px"
        rectangleDivMargin="unset"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="0"
      />
      <Link to="/desktop-4">
      <Button
        className="desktop-8-child"
        disableElevation={true}
        color="warning"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 266, height: 66 }}
      >
        Poster une demande
      </Button></Link>
      <RectangleComponent
        rectangleDivWidth="970px"
        rectangleDivHeight="708px"
        rectangleDivMargin="unset"
        rectangleDivTop="177px"
        rectangleDivLeft="446px"
        propMargin="unset"
      />
      <div className="desktop-8-item" />
      <div className="desktop-8-inner" />
      <div className="desktop-8-child1" />
      <div className="formations-personnelles-de-container1">
        <ol className="exprience-professionnelle">
          <li>formations personnelles de base :</li>
        </ol>
      </div>
      <div className="exprience-professionnelle-container">
        <ol className="exprience-professionnelle">
          <li>Expérience professionnelle :</li>
        </ol>
      </div>
      <div className="comptences-et-qualifications-container">
        <ol className="exprience-professionnelle">
          <li>Compétences et qualifications :</li>
        </ol>
      </div>
      <Button
        className="desktop-8-child2"
        disableElevation={true}
        color="warning"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 300, height: 101 }}
      >
        Diplôme en soins infirmiers
      </Button>
      <Button
        className="desktop-8-child3"
        disableElevation={true}
        color="warning"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 300, height: 111 }}
      >
        Curriculum vitae
      </Button>
      <Button
        className="desktop-8-child4"
        disableElevation={true}
        color="warning"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 300, height: 144 }}
      >
        Lettre de motivation
      </Button>
      <div className="connector-line1" />
      <input
        className="desktop-8-child5"
        placeholder="Expérience professionnelle :"
        type="text"
      />
      <TextField
        className="desktop-8-child6"
        color="primary"
        label="Date de naissance"
        variant="filled"
        sx={{ "& .MuiInputBase-root": { height: "56px" }, width: "300px" }}
      />
      <TextField
        className="desktop-8-child7"
        color="primary"
        label="Nom Complet"
        variant="filled"
        sx={{ "& .MuiInputBase-root": { height: "56px" }, width: "300px" }}
      />
      <FormControl
        className="sexe-group"
        variant="filled"
        sx={{
          borderRadius: "0px 0px 0px 0px",
          width: "300px",
          height: "56px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "56px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "56px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "56px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "56px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
        }}
      >
        <InputLabel color="primary">Sexe</InputLabel>
        <Select color="primary" label="Sexe" disableUnderline displayEmpty>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <TextField
        className="desktop-8-child8"
        color="primary"
        label="Numéro de téléphone"
        variant="filled"
        sx={{ "& .MuiInputBase-root": { height: "56px" }, width: "300px" }}
      />
      <TextField
        className="desktop-8-child9"
        color="primary"
        label="Adresse"
        variant="filled"
        sx={{ "& .MuiInputBase-root": { height: "56px" }, width: "300px" }}
      />
      <div className="property-1variant2-wrapper2">
        <Property1Variant6 />
      </div>
      <b className="infirmier1">Infirmier</b>
      <Link to="/">
      <ChakraButton
        className="patiente1"
        colorScheme="grey"
        variant="ghost"
        w="221px"
      >
        Patient(e)
      </ChakraButton></Link>
      <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
      <Link to="/desktop-11">
      <ChakraButton
        className="mes-patients1"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >
        Mes patients
      </ChakraButton></Link>
      <Link to="/desktop-5">
      <ChakraButton
        className="profil-detail-professionnel1"
        colorScheme="blacky"
        size="md"
        variant="ghost"
        w="242px"
      >
        Profil
      </ChakraButton></Link>
      <Link to="/desktop-4">
      <ChakraButton
        className="home4"
        colorScheme="blacky"
        size="md"
        variant="ghost"
        w="242px"
      >
        Home
      </ChakraButton></Link>
    </div>
  );
};

export default Desktop5;
