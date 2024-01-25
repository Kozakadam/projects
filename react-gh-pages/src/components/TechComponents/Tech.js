import TechTemplate from "./TechTemplate";
import { useState } from 'react';
import SymbolButton from "../buttons/symbolButton";
import techData from "../../data/techData";

function Tech({tech}) {
  let [techIndex, setTechIndex] = useState(0);

  function techForwards() {
    techChange(1);
  }

  function techBackwards() {
    techChange(-1);
  }

  function techChange(changedBy) {
    const newIndex = (techIndex + changedBy) < 0 ? techIndex + changedBy + techData.length : techIndex + changedBy;
    setTechIndex(newIndex % techData.length);
  }

  return (
    <div id="techContainer">
      <div id="techTitle" ref={tech}>Technologies</div>
      <SymbolButton symbolStyle={"symbol2"} symbol={"arrow_forward_ios"} handleClick={techForwards}/>
      <SymbolButton symbolStyle={"symbol3"} symbol={"arrow_back_ios"} handleClick={techBackwards}/>
      <span className="techCounter">{techIndex + 1}/7</span>
      <TechTemplate tech={techData[techIndex]}/>
      <div className="techFooter">
      </div>
    </div>
  )
}

export default Tech;
