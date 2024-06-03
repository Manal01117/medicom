import { useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import RectangleComponent from "../components/rectangle-component";
import Property1Variant4 from "../components/property1-variant4";
import "./desktop13.css";
import { Link } from "react-router-dom";

const Desktop13 = () => {
  const location = useLocation();
  const patient = location.state?.patient;

  if (!patient) {
    return <div>No patient details available.</div>;
  }

  return (
    <div className="desktop-13">
      <RectangleComponent
        rectangleDivWidth="360px"
        rectangleDivHeight="1024px"
        rectangleDivMargin="unset"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="0"
      />
      <Link to="/">
      <Button
        className="infirmiere2"
        colorScheme="grey"
        variant="ghost"
        w="221px"
      >
        Patient?
      </Button></Link>
      <button className="component-set-container">
        <div className="rectangle-div">
          <Property1Variant4 />
        </div>
        <b className="patient2">Infirmier</b>
      </button>
      <img className="utilisateur-1-icon" alt="" src="/utilisateur-11@2x.png" />
      <div className="details">
      <div>
              <div><strong>Name:</strong> {patient.fullName}</div>
              <div><strong>Medical Condition:</strong> {patient.medicalConditions}</div>
              <div><strong>Allergies:</strong> {patient.allergies}</div>
              <div><strong>Current symptoms:</strong> {patient.currentSymptoms}</div>
              <div><strong>Current medications:</strong> {patient.currentMedications}</div>
              <div><strong>Date of birth:</strong> {patient.dateOfBirth}</div>
              <div><strong>Gender:</strong> {patient.gender}</div>
              <div><strong>Phone number:</strong> {patient.phoneNumber}</div>
              <div><strong>Address:</strong> {patient.address}</div>
            </div>
      </div>

      <b className="infirmier-actuel" position="center">Patient details</b>
      


      <Link to="/desktop-4">
      <Button
        className="home2"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >{`Home `}</Button></Link>
      <Link to="/desktop-5">
      <Button
        className="profil1"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >{`Profil `}</Button></Link>
    </div>
  );
};

export default Desktop13;
