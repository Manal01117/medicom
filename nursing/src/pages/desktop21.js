import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Button as MuiButton } from "@mui/material";
import RectangleComponent1 from "../components/rectangle-component1";
import Property1Variant31 from "../components/property1-variant31";
import "./desktop21.css";
import { Link, useNavigate } from "react-router-dom";

const Desktop21 = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const fetchNurses = async (domains) => {
    try {
      const response = await fetch(`http://localhost:5000/search?domains=${domains}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNurseClick = (nurse) => {
    navigate("/desktop-12", { state: { nurse } });
  };

  return (
    <div className="desktop-3">
      <RectangleComponent1
        propWidth="360px"
        propHeight="1024px"
        propMargin="unset"
        propMargin1="0"
      />
      <Link to="/desktop-10">
        <Button
          className="mon-infirmier-actuel4"
          colorScheme="blacky"
          variant="ghost"
          w="242px"
        >
          Mon infirmier actuel
        </Button>
      </Link>
      <Link to="/desktop-9">
        <Button
          className="historique-des-infirmiers4"
          colorScheme="blacky"
          variant="ghost"
          w="242px"
        >
          Historique des infirmiers contactes
        </Button>
      </Link>
      <Button
        className="home7"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
        isDisabled
      >
        Home
      </Button>
      <Link to="/desktop-6">
        <Button
          className="profil4"
          colorScheme="blacky"
          variant="ghost"
          w="242px"
        >
          {`Profil `}
        </Button>
      </Link>
      <input
        className="desktop-3-child"
        placeholder="Recherche (mots cles)"
        type="text"
        onChange={(e) => fetchNurses(e.target.value)}
      />
      
      {searchResults.length > 0 && (
        <div className="details-container-result">
          {searchResults.map((nurse, index) => (
            <div key={index} className="nurse-container" onClick={() => handleNurseClick(nurse)}>
              <div><strong>Name:</strong> {nurse.name}</div>
              <div><strong>Domains:</strong> {nurse.domains.join(', ')}</div>
            </div>
          ))}
        </div>
      )}
    
      <Link to="/desktop-2">
        <Button
          className="infirmiere5"
          colorScheme="grey"
          variant="ghost"
          w="221px"
        >
          Infirmier(e)?
        </Button>
      </Link>
      <button className="component-set-parent2">
        <div className="property-1variant2-wrapper6">
          <Property1Variant31 />
        </div>
        <b className="patient5">Patient</b>
      </button>
      <Link to="/desktop-7">
        <MuiButton
          className="desktop-3-item"
          disableElevation={true}
          color="warning"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 266, height: 66 }}
        >
          Poster une demande
        </MuiButton>
      </Link>


      <img
        className="pxl-20210309-203454756-2-icon4"
        alt=""
        src="/pxl-20210309-203454756-1@2x.png"
      />
    </div>
  );
};

export default Desktop21;
