import React from "react";
import { useScrollTrigger, useTheme } from "@mui/material"
import lightTheme from "../themes/lightTheme";

const ScrollHandler = props => {

  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? theme.palette.primary.main : "transparent",
      color: trigger ? theme.palette.primary.contrastText : "white",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "10px 0px"
    }
  });
};

const ScrollToColor01 = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor01;
