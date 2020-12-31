import icons_1 from "../../assets/img/icons/network.svg";
import icons_2 from "../../assets/img/icons/responsive.svg";
import icons_3 from "../../assets/img/icons/rocket.svg";
import icons_4 from "../../assets/img/icons/reading-book.svg";

function WhyUs() {
  return (
    <section className="page-section">
      <div className="container">
        <TitleSection title="Why Us?" subtitle="Lorem ipsum dolor sit amet.." />

        <div className="row justify-content-center text-center mt-5">
          <ReasonList title="Network" caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." thumb={icons_1} alt="" />
          <ReasonList title="Nail your Pitch" caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." thumb={icons_2} alt="" />
          <ReasonList title="Discover New Startups" caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." thumb={icons_3} alt="" />
          <ReasonList title="Learn" caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." thumb={icons_4} alt="" />
        </div>
      </div>
    </section>
  );
}

function TitleSection(props) {
  return (
    <div className="text-center">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  )
}

function ReasonList(props) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 my-3">
      <div className="img-icon mb-4">
        <img src={props.thumb} alt={props.alt} width="50" />
      </div>
      <h5>{props.title}</h5>
      <p>{props.caption}</p>
    </div>
  )
}


export default WhyUs;