import { useEffect } from "react";
import RectangleComponent from "./rectangle-component";
import "./frame-component2.css";

const FrameComponent2 = ({ iDEXxx }) => {
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
    <button className="instance-parent2" data-animate-on-scroll>
      <RectangleComponent
        rectangleDivWidth="699px"
        rectangleDivHeight="99px"
        rectangleDivMargin="unset"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="unset"
      />
      <b className="ide-xxx1">{iDEXxx}</b>
      <img className="utilisateur-1-icon1" alt="" src="/utilisateur-1@2x.png" />
      <div className="contact-le1">Contacté le ../../....</div>
      <div className="details7">Details</div>
    </button>
  );
};

export default FrameComponent2;
