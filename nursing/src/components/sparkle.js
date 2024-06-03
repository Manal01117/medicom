import { useMemo } from "react";
import "./sparkle.css";

const Sparkle = ({
  sparkleSparkle,
  sparkleIconWidth,
  sparkleIconOverflow,
  sparkleIconHeight,
  sparkleIconPosition,
  sparkleIconTop,
  sparkleIconLeft,
}) => {
  const sparkleIconStyle = useMemo(() => {
    return {
      width: sparkleIconWidth,
      overflow: sparkleIconOverflow,
      height: sparkleIconHeight,
      position: sparkleIconPosition,
      top: sparkleIconTop,
      left: sparkleIconLeft,
    };
  }, [
    sparkleIconWidth,
    sparkleIconOverflow,
    sparkleIconHeight,
    sparkleIconPosition,
    sparkleIconTop,
    sparkleIconLeft,
  ]);

  return (
    <img
      className="sparkle-icon"
      alt=""
      src={sparkleSparkle}
      style={sparkleIconStyle}
    />
  );
};

export default Sparkle;
