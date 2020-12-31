
import partner_1 from "../../assets/img/partners/creative_photo.png";
import partner_2 from "../../assets/img/partners/global_tv.png";
import partner_3 from "../../assets/img/partners/net_sport_tv.png";
import partner_4 from "../../assets/img/partners/news_digital_tv.png";


function Partners() {
  return (
    <section className="page-section bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h3>Our Partners</h3>
        </div>
        <div className="row justify-content-center mt-5">
          <PartnerList thumb={partner_1} alt="" />
          <PartnerList thumb={partner_2} alt="" />
          <PartnerList thumb={partner_3} alt="" />
          <PartnerList thumb={partner_4} alt="" />
        </div>
      </div>
    </section>
  );
}

function PartnerList(props) {
  return (
    <div className="col-lg-3 col-md-4 col-6 mb-3">
      <div className="img-partners">
        <img src={props.thumb} alt={props.alt} />
      </div>
    </div>
  );
}

export default Partners;