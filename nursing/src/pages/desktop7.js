import { Button, IconButton } from "@chakra-ui/react";
import Property1Variant8 from "../components/property1-variant8";
import Sparkle from "../components/sparkle";
import RectangleComponent from "../components/rectangle-component";
import "./desktop7.css";
import { Link } from "react-router-dom";
const Desktop7 = () => {
  return (
    <div className="desktop-6">
      <Link to="/desktop-2">
      <Button
        className="infirmiere4"
        colorScheme="grey"
        variant="ghost"
        w="221px"
      >
        Infirmier(e)?
      </Button></Link>
      <button className="component-set-parent1">
        <div className="property-1variant2-wrapper4">
          <Property1Variant8 />
        </div>
        <b className="patient4">Patient</b>
      </button>
      <img
        className="pxl-20210309-203454756-1-icon"
        alt=""
        src="/pxl-20210309-203454756-11@2x.png"
      />
      <b className="name1">Name</b>
      <div className="highlight-11" />
      <div className="age-occupation-location-container1">
        <ul className="age-occupation-location-more-i1">
          <li className="age1">Age</li>
          <li className="age1">Occupation</li>
          <li className="age1">Location</li>
          <li className="age1">More info</li>
          <li>More info</li>
        </ul>
      </div>
      <div className="connector-line3" />
      <p className="lorem-ipsum-dolor1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <b className="bio1">Bio</b>
      <Sparkle
        sparkleSparkle="/sparkle.svg"
        sparkleIconWidth="113px"
        sparkleIconOverflow="unset"
        sparkleIconHeight="119px"
        sparkleIconPosition="absolute"
        sparkleIconTop="149px"
        sparkleIconLeft="938px"
      />
      <img className="desktop-6-child" alt="" src="/vector-7.svg" />
      <img className="desktop-6-item" alt="" src="/vector-7.svg" />
      <RectangleComponent
        rectangleDivWidth="360px"
        rectangleDivHeight="1024px"
        rectangleDivMargin="unset"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="0"
      />
      <img
        className="pxl-20210309-203454756-2-icon3"
        alt=""
        src="/pxl-20210309-203454756-1@2x.png"
      />
      <Link to="/desktop-10">
      <Button
        className="mon-infirmier-actuel3"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >
        Mon infirmier actuel
      </Button></Link>
      <Link to="/desktop-9">
      <Button
        className="historique-des-infirmiers3"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >
        Historique des infirmiers contactes
      </Button></Link>
      <Link to="/desktop-3">
      <Button className="home6" colorScheme="blacky" variant="ghost" w="242px">
        Home
      </Button></Link>
      <Link to="/desktop-6">
      <Button
        className="profil3"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
        isDisabled
      >{`Profil `}</Button></Link>
    </div>
  );
};

export default Desktop7;
