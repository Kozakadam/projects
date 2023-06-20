import js from '../images/js.png';
import htmlcss from '../images/htmlcss.png';
import react from '../images/react.png';
import express from '../images/express.png';
import mongo from '../images/mongo.png';
import node from '../images/node.png';

function TechTemplate({ index }){
    const images = [js, htmlcss, react, express, mongo, node];
    const titles = ['JavaScript', 'HTML and CSS', 'React', 'Express.js', 'MongoDB', 'Node.js'];
    const description = [
        'It is the first programming language I learned. I used it for most of my projects.',
        'The most common mark-up and styling language respectively. Just like Javascript, it is used for most of my projects.',
        'It is the most widely used Javascript framework. It makes dom manipulation faster and more efficient.',
        'Backend web aplication framework.',
        'NoSQL database program. I use it with the mongoose programming library.',
        'It is a server enviroment. It makes it possible to use JavaScript for client-side and server-side code without an additional language.'
    ];
    return(
    <div id="techList">
    <div className="techIconContainer">
        <div className="techIcon" id={`techIcon${index}`}><img className='techIconImg' src={images[index]} alt={images[index]} width='500' height='600'/></div>
    </div>
    <div>
        <div className="techSubTitle">{titles[index]}</div>
        <div className="techDetails">{description[index]}</div>
    </div>
</div>)
}

export default TechTemplate;