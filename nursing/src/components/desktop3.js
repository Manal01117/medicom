import { useEffect, useState } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import RectangleComponent1 from "./rectangle-component1";
import Property1Variant61 from "./property1-variant61";
import "./desktop3.css";
import { Link, useNavigate } from "react-router-dom";

const Desktop31 = () => {
  const offers = JSON.parse(localStorage.getItem("demandes"));
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

  const handleOfferClick = (patient) => {
    navigate("/desktop-13", { state: { patient } });
  };

  return (
    <div className="desktop-4">
      <RectangleComponent1
        propWidth="360px"
        propHeight="1024px"
        propMargin="0"
        propMargin1="unset"
      />
      <div className="property-1variant2-wrapper7">
        <Property1Variant61 />
      </div>
      <b className="infirmier4">Infirmier</b>
      <input
        className="desktop-4-child"
        placeholder="Recherche (mots cles)"
        type="text"
      />
      <Link to="/">
      <Button
        className="patiente4"
        colorScheme="grey"
        variant="ghost"
        w="221px"
      >
        Patient(e)
      </Button></Link>
      <Link to="/desktop-8">
      <Button
        className="desktop-4-item"
        colorScheme="orange"
        variant="solid"
        w="266px"
      >
        Poster une offre
      </Button></Link>

      {offers.length > 0 && (
        <div className="details-container-result" >
          {offers.map((patient, index) => (
            <div key={index} className="patient-container" onClick={() => handleOfferClick(patient)}>
              <div><strong>Name:</strong> {patient.fullName}</div>
              <div><strong>Medical Condition:</strong> {patient.medicalConditions}</div>
            </div>
          ))}
        </div>
      )}

      <img className="image-2-icon3" alt="" src="/image-2@2x.png" />
      <Link to="/desktop-11">
      <Button
        className="mes-patients3"
        colorScheme="blacky"
        variant="ghost"
        w="242px"
      >
        Mes patients
      </Button></Link>
      <Link to="/desktop-5">
      <Button
        className="profil-detail-professionnel3"
        colorScheme="blacky"
        size="md"
        variant="ghost"
        w="242px"
      >
        Profil
      </Button></Link>
      <Button
        className="home8"
        colorScheme="blacky"
        size="md"
        variant="ghost"
        w="242px"
        isDisabled
      >
        Home
      </Button>
    </div>
  );
};

export default Desktop31;
