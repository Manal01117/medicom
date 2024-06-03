import { useCallback } from "react";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Property1Variant1 from "../components/property1-variant1";
import Property1Variant from "../components/property1-variant";
import "./desktop.css";
import { Link } from "react-router-dom";
const Desktop = () => {
  const navigate = useNavigate();

  //const onDesktop1Click = useCallback(() => {
   // navigate("/desktop-3");
 // }, [navigate]);

  return (
    <div className="desktop-1">
      <div className="property-1default-parent">
        <Property1Variant1 inputType="Email" propTop="20px" />
        <Property1Variant1 inputType="Password" />
      </div>
      <button className="component-set-parent">
        <div className="property-1variant2-wrapper">
          <Property1Variant />
        </div>
        <b className="patient">Patient</b>
      </button>
      <Link to="/desktop-3">
      <Button
        className="se-connecter"
        disableElevation={true}
        color="warning"
        variant="text"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 255, height: 29 }}

      >
        Se connecter
      </Button>
      </Link>
      <Button
        className="nouvel-compte"
        disableElevation={true}
        color="warning"
        variant="text"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 241, height: 34 }}
      >
        nouvel compte
      </Button>
      <Link to="/desktop-2">
      <Button
        className="infirmiere"
        disableElevation={true}
        color="primary"
        name="Infirmier(e)?"
        variant="text"
        startIcon={<Icon>arrow_forward_ios_sharp</Icon>}
        sx={{ borderRadius: "0px 0px 0px 0px", width: 221, height: 50 }}
      >
        Infirmier(e)?
      </Button></Link>
      <b className="medicom">MediCom</b>
    </div>
  );
};

export default Desktop;
