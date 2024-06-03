import { useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import RectangleComponent from "../components/rectangle-component";
import Property1Variant4 from "../components/property1-variant4";
import "./desktop12.css";
import { Link } from "react-router-dom";

const Desktop12 = () => {
  const location = useLocation();
  const nurse = location.state?.nurse;

  if (!nurse) {
    return <div>No nurse details available.</div>;
  }

  return (
    <div className="desktop-12">
      <RectangleComponent
        rectangleDivWidth="360px"
        rectangleDivHeight="1024px"
        rectangleDivMargin="unset"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="0"
      />
      <Link to="/desktop-2">
      <Button
        className="infirmiere2"
        colorScheme="grey"
        variant="ghost"
        w="221px"
      >
        Infirmier(e)?
      </Button></Link>
      <button className="component-set-container">
        <div className="rectangle-div">
          <Property1Variant4 />
        </div>
        <b className="patient2">Patient</b>
      </button>
      <b className="ide-xxx">{nurse.name}</b>
      <img className="utilisateur-1-icon" alt="" src="/utilisateur-11@2x.png" />
      <div className="details">
      <div >
        <ul >
        <li><strong>Domains:</strong> {nurse.domains}</li>
          <li><strong>Experience:</strong> {nurse.experience} years</li>
          <li><strong>Availability:</strong> {nurse.availability ? "Yes" : "No"}</li>
          <li><strong>Email:</strong> {nurse.email}</li>
          <li><strong>Phone:</strong> {nurse.phone}</li>
        </ul>
      </div>
      <div className="connector-line2" />
      <b>Bio</b>
          <div>{nurse.bio}</div>
      </div>
      <img
        className="pxl-20210309-203454756-2-icon1"
        alt=""
        src="/pxl-20210309-203454756-1@2x.png"
      />
      <b className="infirmier-actuel">Profil</b>

      <Button
        className="mon-infirmier-actuel1"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >
        Mon infirmier actuel
      </Button>
      <Link to="/desktop-9">
      <Button
        className="historique-des-infirmiers1"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >
        Historique des infirmiers contactes
      </Button></Link>
      <Link to="/desktop-3">
      <Button
        className="home2"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >{`Home `}</Button></Link>
      <Link to="/desktop-10">
      <Button
        className="profil1"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >{`Profil `}</Button></Link>
    </div>
  );
};

export default Desktop12;
