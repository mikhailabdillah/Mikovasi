

function CardBlog(props) {
  return (
    <div className="card-blog">
      <div className="img-thumb">
        <img src={props.thumb} alt="" />
      </div>
      <div className="body">
        <h5 className="post-title">{props.title}</h5>
        <p>{props.excerpt}</p>
        <a href={props.link} className="btn btn-readmore">Read More <span class="mai-arrow-forward"></span></a>
      </div>
    </div>
  )
}


export default CardBlog;
