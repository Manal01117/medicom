import { Button, IconButton } from "@chakra-ui/react";
import RectangleComponent from "../components/rectangle-component";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Property1Variant3 from "../components/property1-variant3";
import "./desktop2.css";
import { Link } from "react-router-dom";
const Desktop2 = () => {
  return (
    <div className="desktop-11">
      <RectangleComponent
        rectangleDivWidth="360px"
        rectangleDivHeight="1024px"
        rectangleDivMargin="unset"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="0"
      />
      <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      <Button
        className="mes-patients"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
        isDisabled
      >
        Mes patients
      </Button>
      <Link to="/desktop-5">
      <Button
        className="profil-detail-professionnel"
        colorScheme="blacky"
        size="md"
        variant="ghost"
        w="242px"
      >
        Profil
      </Button></Link>
      <Link to="/desktop-4">
      <Button
        className="home1"
        colorScheme="blacky"
        size="md"
        variant="ghost"
        w="242px"
      >
        Home
      </Button></Link>
      <input className="desktop-11-child" placeholder="Recherche" type="text" />
      <FrameComponent2 iDEXxx="M. xxx" />
      <FrameComponent1 iDEYyy="M. yyy" />
      <FrameComponent
        iDEZzz="M. zzz"
        maman1="/maman-1@2x.png"
        propTop="579px"
        propBorderRadius="224px"
      />
      <FrameComponent
        iDEZzz="M. ttt"
        maman1="/utilisateur-1-1@2x.png"
        propTop="736px"
        propBorderRadius="256px"
      />
      <button className="image-11" />
      <b className="patients">Patients:</b>
      <div className="property-1variant2-frame">
        <Property1Variant3 />
      </div>
      <b className="infirmier">Infirmier</b>
      <Link to="/">
      <Button className="patiente" colorScheme="grey" variant="ghost" w="221px">
        Patient(e)
      </Button></Link>
    </div>
  );
};

export default Desktop2;
