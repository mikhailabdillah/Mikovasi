import img_1 from "../../assets/img/icons/growing-community.png";
import img_2 from "../../assets/img/icons/engaged-community.png";
import img_3 from "../../assets/img/icons/live-video.png";

const Services = [
  {
    name: 'Fastest Growing Community',
    caption: '1000 members in 2 weeks',
    img: img_1,
  },
  {
    name: 'Most Engaged Community',
    caption: '80% higher then others',
    img: img_2,
  },
  {
    name: 'Live Video Events',
    caption: 'Practice live pitching.',
    img: img_3,
  }
]

function About() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row">
          <TitleSection title="What is SaasIn?" />
          <DescSection />
        </div>
      </div>
    </section>
  )
}

function TitleSection(props) {
  return (
    <div className="col-lg-4 text-lg-right pr-lg-5">
      <div className="display-4 fw-semibold">{props.title}</div>
    </div>
  )
}

function DescSection() {
  return (
    <div className="col-lg-8">
      <p className="text-secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
        obcaecati, sit suscipit deleniti aspernatur vel? Vero, cumque?
        Quasi ipsa ullam fuga quod sed esse, aliquam alias, sint
        laudantium quos minus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Amet, earum ipsum sapiente inventore soluta
        facere vitae quia, quas recusandae delectus aperiam quaerat a
        officiis deserunt voluptates nobis? Illum, ducimus similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        eligendi, et quisquam dolor necessitatibus vero odit quasi
        quibusdam iste eos deserunt perferendis. Placeat nemo expedita
        error odit perspiciatis iusto quae.</p>
      <div className="row justify-content-center text-center mt-5">
        {
          Services.map(service => (
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="img-place mb-3">
                <img src={service.img} alt="" />
              </div>
              <h5>{service.name}</h5>
              <p>{service.caption}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default About;