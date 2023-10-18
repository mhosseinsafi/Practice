import "../style/instruction.css";
import React from "react";
import InstructionImage from "../asset/instruction.png";



function Instruction() {
  return (
    <div className="div-style">
      <div className="center-top">
        <img src={InstructionImage} alt="quizjs" classname="instruction-image" />
      </div>
      <div className="instruction-container">
        <p>instructions Go Here.</p>
      </div>
      <div class="button-container">
        <button class="rectangle-button" id="start-button">Go Back</button>
        <button class="rectangle-button" id="menu-button">Play</button>
      </div>
    </div>
  );
}

export default Instruction;