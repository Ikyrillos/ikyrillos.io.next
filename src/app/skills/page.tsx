"use client";

import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../models/info";
import AnimatedContainer from "../../components/shared/AnimatedContainer";
const commandStyle = {
  color: "blueViolet",
};
const nameStyle = {
  color: info.baseColor,
};

const resultStyle = {
  color: "green",
};
export default function TerminalAbout() {
  const firstName = info.firstName.toLowerCase();

  function skillsText() {
    return (
      <div>
        <AnimatedContainer>
          <p style={commandStyle}>
            <span style={nameStyle}>
              {firstName}
              {info.lastName.toLowerCase()} $
            </span>{" "}
            cd skills/tools
          </p>
          <p style={commandStyle}>
            <span style={nameStyle}>
              skills/tools <span style={nameStyle}>main</span> $
            </span>{" "}
            ls
          </p>
          <p> Proficient With</p>
          <ul className="flex flex-wrap">
            {info.skills.proficientWith.map((proficiency, index) => (
              <li key={index} style={nameStyle}>
                &nbsp;.{proficiency}
              </li>
            ))}
          </ul>
          <p className={`text-${info.baseColor}`}> Exposed To</p>
          <ul className="flex flex-wrap">
            {info.skills.exposedTo.map((skill, index) => (
              <li
                key={index}
                style={{
                  color: "green",
                }}
              >
                {" "}
                &nbsp;.{skill}
              </li>
            ))}
          </ul>
        </AnimatedContainer>
      </div>
    );
  }

  function miscText() {
    return (
      <>
        <p style={commandStyle}>
          <span style={nameStyle}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p style={commandStyle}>
          <span style={nameStyle}>
            hobbies/interests <span className="text-green">main</span> $
          </span>{" "}
          ls
        </p>
        <ul className="flex flex-wrap">
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              &nbsp;
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box display={"block"} mt={"3rem"}>
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
