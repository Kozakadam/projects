import TechTemplate from "./TechTemplate";
import { useState, useEffect } from 'react';

function Tech({tech}){
    let [ index, setIndex] = useState(0);
    function techForwards(){
        if (index === 6) setIndex(() => 0);
        else setIndex(() => index + 1);
    }
    function techBackwards(){
        if (index === 0) setIndex(() => 6);
        else setIndex(() => index - 1);
    }

    return(
        <div id="techContainer">
            <div id="techTitle" ref={tech}>
                Technologies
            </div>
            <span className="material-symbols-outlined symbol2" onClick={techForwards}>arrow_forward_ios</span>
            <span className="material-symbols-outlined symbol3" onClick={techBackwards}>arrow_back_ios</span>
            <span className="techCounter">{index + 1}/7</span>
            <TechTemplate index={index}/>
            <div className="techFooter">
                {/* {`width: ${window.innerWidth}`}
                {`height: ${window.innerHeight}`} */}
            </div>
        </div>
    )
}

export default Tech;