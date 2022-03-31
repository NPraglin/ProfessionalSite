import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "JavaScript Developer",
          "Technologist",
          "MERN Stack Crafter",
          "Blockchain Enthusiast",
          "Django Framework"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
