import js from '../images/js.png';
import htmlcss from '../images/htmlcss.png';
import react from '../images/react.png';
import express from '../images/express.png';
import mongo from '../images/mongo.png';
import node from '../images/node.png';
// import { useState, useEffect } from 'react';

function TechTemplate({ index }){
    const images = [js, htmlcss, react, express, mongo, node];
    const titles = ['JavaScript', 'HTML and CSS', 'React', 'Express.js', 'Mondo DB', 'Node.js'];
    // const [image, setImage] = useState(js);
    // const [title, setTitle] = useState('JavaScript');
    // useEffect(() => {
    //     setImage(images[index]);
    //     setTitle(titles[index]);
    // }, [index]);
    return(
    <div id="techList">
    <div className="techIconContainer">
        <div className="techIcon"><img className='techIconImg' src={images[index]} alt={images[index]} width='500' height='600'/></div>
    </div>
    <div>
        <div className="techSubTitle">{titles[index]}</div>
        <div className="techDetails">Praesent ut erat nec sem pharetra imperdiet. 
        Aliquam eget nisi interdum, finibus sapien ut, feugiat sem. Proin nec laoreet nisi. 
        Duis maximus, tortor ut tristique accumsan, purus tortor porttitor eros, id porta tellus mi in odio.</div>
    </div>
</div>)
}

export default TechTemplate;