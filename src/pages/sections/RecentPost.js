
function RecentPost() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <PostRight title="Post Title" link="#0" thumb="" excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea consequatur dolore fugiat
              laboriosam ab sed..." />
            <PostRight title="Post Title" link="#0" thumb="" excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea consequatur dolore fugiat
              laboriosam ab sed..." />
            <PostRight title="Post Title" link="#0" thumb="" excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea consequatur dolore fugiat
              laboriosam ab sed..." />
          </div>
          <div className="col-lg-5">
            <PostLeft title="Post Title" link="#0" thumb="" excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea consequatur dolore fugiat
              laboriosam ab sed..." />
            <PostLeft title="Post Title" link="#0" thumb="" excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea consequatur dolore fugiat
              laboriosam ab sed..." />
            <PostLeft title="Post Title" link="#0" thumb="" excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea consequatur dolore fugiat
              laboriosam ab sed..." />
          </div>
          <div className="col-12 text-center mt-5">
            <a href="#0" class="button is-theme">Discover More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PostRight(props) {
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

function PostLeft(props) {
  return (
    <div className="card-blog">
      <div className="body">
        <h5 className="post-title">{props.title}</h5>
        <p>{props.excerpt}</p>
        <a href={props.link} className="btn btn-readmore">Read More <span className="mai-arrow-forward"></span></a>
      </div>
      <div className="img-thumb">
        <img src={props.thumb} alt="" />
      </div>
    </div>
  );
}

export default RecentPost;