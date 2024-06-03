import { useMemo, useEffect } from "react";
import RectangleComponent from "./rectangle-component";
import "./frame-component.css";

const FrameComponent = ({ iDEZzz, maman1, propTop, propBorderRadius }) => {
  const frameButtonStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const maman1IconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

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
    <button
      className="instance-parent4"
      data-animate-on-scroll
      style={frameButtonStyle}
    >
      <RectangleComponent
        rectangleDivWidth="699px"
        rectangleDivHeight="99px"
        rectangleDivMargin="unset"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        propMargin="unset"
      />
      <b className="ide-zzz">{iDEZzz}</b>
      <div className="contact-le3">Contacté le ../../....</div>
      <div className="details9">Details</div>
      <img
        className="maman-1-icon"
        alt=""
        src={maman1}
        style={maman1IconStyle}
      />
    </button>
  );
};

export default FrameComponent;
