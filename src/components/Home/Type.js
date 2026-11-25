import React from "react";
import Typewriter from "typewriter-effect";
import { profile } from "../../data/profile";

function Type() {
  return (
    <Typewriter
      options={{
        strings: profile.designations,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
