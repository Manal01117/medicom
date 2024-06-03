import { useMemo } from "react";
import "./rectangle-component.css";

const RectangleComponent = ({
  rectangleDivWidth,
  rectangleDivHeight,
  rectangleDivMargin,
  rectangleDivTop,
  rectangleDivLeft,
  propMargin,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      width: rectangleDivWidth,
      height: rectangleDivHeight,
      margin: rectangleDivMargin,
      top: rectangleDivTop,
      left: rectangleDivLeft,
    };
  }, [
    rectangleDivWidth,
    rectangleDivHeight,
    rectangleDivMargin,
    rectangleDivTop,
    rectangleDivLeft,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className="rectangle-wrapper" style={rectangleDivStyle}>
      <div className="instance-child" style={rectangleDiv1Style} />
    </div>
  );
};

export default RectangleComponent;
