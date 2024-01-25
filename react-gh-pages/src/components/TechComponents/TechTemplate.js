function TechTemplate({tech}) {
  return (
    <div id="techList">
      <div className="techIconContainer">
        <div className="techIcon" id={`techIcon${tech.id}`}>
          <img className='techIconImg' src={tech.image} alt={tech.title} width='500' height='600'/>
        </div>
      </div>
      <div>
        <div className="techSubTitle">{tech.title}</div>
        <div className="techDetails">{tech.description}</div>
      </div>
    </div>)
}

export default TechTemplate;
