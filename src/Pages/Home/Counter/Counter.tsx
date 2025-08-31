import "./Counter.css";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCode,
  faFileAlt,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";

const Counter = () => {

  const numbers = [
    { id: 1, name: "Language", target: 3, ex: 0, icon: faCode, fontsize: '20px', padding: "14.6px 12.5px", },
    { id: 2, name: "Fremwork", target: 5, ex: 0, icon: faGear, fontsize: '24px', padding: "13.5px 13.5px", },
    { id: 3, name: "Projects", target: 10, plus: '+', icon: faFileAlt, fontsize: '24px', padding: "12.5px 15.5px", },
    { id: 4, name: "Certificate", target: 2, ex: 0, icon: faAward, fontsize: '28px', padding: "10px 14px", },
  ]

  return (
    <div className="numberBGColor">
      <div className="customContainer" style={{ color: 'white', padding: '60px 0' }}>
        <h3 data-aos="flip-up" className="globalSectionHeadline" style={{marginBottom:'70px'}}> NUMBERS </h3>
        <Row gutter={[16, 16]}>
          {
            numbers.map((item) => (
              <Col xs={24} md={12} lg={6} key={item?.id}>
                <div data-aos="fade-down" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', gap: '10px', }}>
                  <FontAwesomeIcon style={{ backgroundColor: "white", color: "rgba(0, 89, 172, 1)", padding: item.padding, fontSize: item.fontsize, borderRadius: "50%", border: "4px solid #999999ff" }} icon={item.icon} />
                  <h1 style={{ margin: 0 }}>
                    {item.ex}<CountUp end={item.target}  enableScrollSpy={true} scrollSpyDelay={0}  />{item.plus}
                    <span></span>
                  </h1>
                  <h5 style={{ margin: 0 }}>{item.name}</h5>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
  );
};

export default Counter;
