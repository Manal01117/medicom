import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./property1-variant1.css";

const Property1Variant1 = ({ inputType, propTop }) => {
  const property1Variant2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <TextField
      className="property-1variant21"
      color="primary"
      label={inputType}
      variant="filled"
      sx={{ "& .MuiInputBase-root": { height: "69px" }, width: "364px" }}
      style={property1Variant2Style}
    />
  );
};

export default Property1Variant1;
