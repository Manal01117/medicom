import { Button, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Sparkle from "../components/sparkle";
import RectangleComponent from "../components/rectangle-component";
import Property1Variant7 from "../components/property1-variant7";
import "./desktop6.css";
import { Link } from "react-router-dom";
const Desktop6 = () => {
  const navigate = useNavigate();
  //const location = useLocation();
  const data = JSON.parse(localStorage.getItem("userData"));
  const handleUpdate = () => {
    // Handle back button click
    navigate("/update-nurse-account");
  };
  

  return (
    <div className="desktop-5">
      <b className="name">{data.name}</b>
      <div className="highlight-1" />
      <div className="age-occupation-location-container">
        <ul className="age-occupation-location-more-i">
        <li className="age">Domains: {data.domains.join(',')}</li>
          <li className="age">Experience: {data.experience} years</li>
          <li className="age">Availability: {data.availability ? "Yes" : "No"}</li>
          <li className="age">Email: {data.email}</li>
          <li className="age">Phone: {data.phone}</li>
        </ul>
      </div>
      <div className="connector-line2" />
      <p className="lorem-ipsum-dolor">
          <div>
            {data.bio}
          </div>
          <div>
      <Button
        variant="outline"
        colorScheme="orange"
        width="auto"
        mt={4}
        onClick={handleUpdate}
      >
        Update profil
       
      </Button>
          </div>
      </p>
      <b className="bio">Bio</b>
      
      <Sparkle
        sparkleSparkle="/sparkle.svg"
        sparkleIconWidth="113px"
        sparkleIconOverflow="unset"
        sparkleIconHeight="119px"
        sparkleIconPosition="absolute"
        sparkleIconTop="149px"
        sparkleIconLeft="938px"
      />
      <img className="desktop-5-child" alt="" src="/vector-7.svg" />
      <img className="desktop-5-item" alt="" src="/vector-7.svg" />
      <RectangleComponent
        rectangleDivWidth="360px"
        rectangleDivHeight="1024px"
        rectangleDivMargin="0"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="unset"
      />
      <div className="property-1variant2-wrapper3">
        <Property1Variant7 />
      </div>
      <b className="infirmier2">Infirmier</b>
      <Link to="/">
      <Button
        className="patiente2"
        colorScheme="grey"
        variant="ghost"
        w="221px"
      >
        Patient(e)
      </Button></Link>
      <img className="image-2-icon2" alt="" src="/image-2@2x.png" />
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <Link to="/desktop-11">
      <Button
        className="mes-patients2"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >
        Mes patients
      </Button></Link>
      <Link to="/desktop-5">
      <Button
        className="profil-detail-professionnel2"
        colorScheme="blacky"
        size="md"
        variant="ghost"
        w="242px"
        isDisabled
      >
        Profil
      </Button></Link>
      <Link to="/desktop-4">
      <Button
        className="home5"
        colorScheme="blacky"
        size="md"
        variant="ghost"
        w="242px"
      >
        Home
      </Button></Link>
    </div>
  );
};

export default Desktop6;
