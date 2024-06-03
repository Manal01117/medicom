import { Button, IconButton } from "@chakra-ui/react";
import RectangleComponent from "../components/rectangle-component";
import Property1Variant2 from "../components/property1-variant2";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import "./desktop1.css";
import { Link } from "react-router-dom";
const Desktop1 = () => {
  return (
    <div className="desktop-9">
      <RectangleComponent
        rectangleDivWidth="360px"
        rectangleDivHeight="1024px"
        rectangleDivMargin="unset"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="0"
      />
      <input className="desktop-9-child" placeholder="Recherche" type="text" />
      <Link to="/desktop-2">
      <Button
        className="infirmiere1"
        colorScheme="grey"
        variant="ghost"
        w="221px"
      >
        Infirmier(e)?
      </Button></Link>
      <button className="component-set-group">
        <div className="property-1variant2-container">
          <Property1Variant2 />
        </div>
        <b className="patient1">Patient</b>
      </button>
      <FrameComponent2 iDEXxx="IDE xxx" />
      <FrameComponent1 iDEYyy="IDE yyy" />
      <FrameComponent iDEZzz="IDE zzz" maman1="/maman-1@2x.png" />
      <FrameComponent
        iDEZzz="IDE ttt"
        maman1="/utilisateur-1-1@2x.png"
        propTop="736px"
        propBorderRadius="256px"
      />
      <button className="image-1" />
      <img
        className="pxl-20210309-203454756-2-icon"
        alt=""
        src="/pxl-20210309-203454756-1@2x.png"
      />
      <b className="infirmiers-contacts-ce">Infirmiers contactés ce mois :</b>
      <Link to="/desktop-10">
      <Button
        className="mon-infirmier-actuel"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >
        Mon infirmier actuel
      </Button></Link>
      
      <Button
        className="historique-des-infirmiers"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
        isDisabled
      >
        Historique des infirmiers contactes
      </Button>
      <Link to="/desktop-3">
      <Button className="home" colorScheme="blacky" variant="ghost" w="242px">
        Home
      </Button></Link>
      <Link to="/desktop-6">
      <Button
        className="profil"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >{`Profil `}</Button></Link>
    </div>
  );
};

export default Desktop1;
