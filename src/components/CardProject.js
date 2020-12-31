
function CardProject(props) {
  return (
    <div className="card-project">
      <div className="img-place">
        <img src={props.thumb} alt="" />
      </div>
      <div className="body">
        <h5 className="project-name"><a href={props.link}>{props.name}</a></h5>
        <div className="project-category">
          {props.category}
        </div>
      </div>
    </div>
  );
}

export default CardProject;