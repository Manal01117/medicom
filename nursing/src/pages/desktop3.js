import { Button, IconButton } from "@chakra-ui/react";
import RectangleComponent from "../components/rectangle-component";
import Property1Variant4 from "../components/property1-variant4";
import "./desktop3.css";
import { Link } from "react-router-dom";
const Desktop3 = () => {
  return (
    <div className="desktop-10">
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
      <b className="ide-xxx">IDE xxx</b>
      <img className="utilisateur-1-icon" alt="" src="/utilisateur-11@2x.png" />
      <div className="contact-le">Contacté le ../../....</div>
      <div className="details"> ../../.... details</div>
      <div className="details1"> ../../.... details</div>
      <div className="details2"> ../../.... details</div>
      <b className="historique-de-visites">Historique de visites (record)</b>
      <div className="div">0645890718</div>
      <img
        className="pxl-20210309-203454756-2-icon1"
        alt=""
        src="/pxl-20210309-203454756-1@2x.png"
      />
      <b className="infirmier-actuel">Infirmier actuel</b>
      <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      <Button
        className="mon-infirmier-actuel1"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
        isDisabled
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

export default Desktop3;
