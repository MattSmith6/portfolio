import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Software Developer"
        ],
        autoStart: true,
        loop: false,
        pauseFor: 100000000,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
