import { useEffect } from "react";
import RectangleComponent from "./rectangle-component";
import "./frame-component1.css";

const FrameComponent1 = ({ iDEYyy }) => {
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
  return (
    <button className="instance-parent3" data-animate-on-scroll>
      <RectangleComponent
        rectangleDivWidth="699px"
        rectangleDivHeight="99px"
        rectangleDivMargin="unset"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="unset"
      />
      <b className="ide-yyy">{iDEYyy}</b>
      <div className="contact-le2">Contacté le ../../....</div>
      <div className="details8">Details</div>
      <img className="femelle-1-icon" alt="" src="/femelle-1@2x.png" />
    </button>
  );
};

export default FrameComponent1;
