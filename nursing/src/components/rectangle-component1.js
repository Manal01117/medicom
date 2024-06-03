import { useMemo } from "react";
import "./rectangle-component1.css";

const RectangleComponent1 = ({
  propWidth,
  propHeight,
  propMargin,
  propMargin1,
}) => {
  const rectangleDiv2Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      margin: propMargin,
    };
  }, [propWidth, propHeight, propMargin]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  return (
    <div className="rectangle-container" style={rectangleDiv2Style}>
      <div className="instance-item" style={rectangleDiv3Style} />
    </div>
  );
};

export default RectangleComponent1;
