import React from "react";
import Style from "./Terminal.module.css";
import classNames from "classnames";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal({
  text,
  style,
}: {
  text: JSX.Element;
  style?: React.CSSProperties;
}) {
  return (
    <Box
      component={"section"}
      className={classNames(Style.terminal, Style.shadowed)}
      width={{ lg: "100%", xs: "100%", md: "100%" }}
      borderRadius={"0.5rem"}
      style={style}
    >
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.5rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1rem"}
      >
        <i className={classNames(iconClass, Style.red)} />
        <i className={classNames(iconClass, Style.amber)} />
        <i className={classNames(iconClass, Style.green)} />
      </Box>
      <Box
        py={{ xs: "1rem", md: "2rem", lg: "3rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius={"0 0 0.5rem 0.5rem"}
        sx={{ backgroundColor: "#27242f" }}
        fontSize={"1.5rem"}
        fontFamily={"Courier New, Courier, monospace"}
      >
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
