
import CardProject from "../../components/CardProject";

const Projects = [
  {
    name: 'Project 1',
    link: '#0',
    thumb: '',
    category: 'Business',
  },
  {
    name: 'Project 2',
    link: '#0',
    thumb: '',
    category: 'Real Estate',
  },
  {
    name: 'Project 3',
    link: '#0',
    thumb: '',
    category: 'E-commerce',
  },
  {
    name: 'Project 4',
    link: '#0',
    thumb: '',
    category: 'Agency',
  },
  {
    name: 'Project 5',
    link: '#0',
    thumb: '',
    category: 'Creative Agency',
  },
]

function RecentProject() {
  return (
    <section className="page-section">
      <div className="container">
        <TitleSection title="Recent Projects" subtitle="This place is a community where you can." />

        <div className="row justify-content-center">
          {
            Projects.map(project => (
              <div className="col-lg-4 mb-4">
                <CardProject thumb={project.thumb} link={project.link} name={project.name} category={project.category} />
              </div>
            ))
          }

          <div className="col-12 text-center mt-5">
            <a href="#0" class="button is-theme">Discover More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TitleSection(props) {
  return (
    <div className="text-center mb-5">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default RecentProject;