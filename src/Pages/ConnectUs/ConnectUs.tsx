import "./ConnectUs.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faMobileAndroidAlt,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import { Col, Row } from "antd";
library.add(fab);

const ConnectUs = () => {

  const contactInfo = [
    { id: 1, icon: faLocationDot, title: 'Location', description: 'Jatrabari, Dhaka. 1204' },
    { id: 2, icon: faEnvelope, title: 'Email', description: 'abdullahalmasud772gmail.com' },
    { id: 3, icon: faMobileAndroidAlt, title: 'Phone', description: '+880 1726457771' },
  ]

  return (
    <div id="connect-us" className="customContainer" style={{ padding: '60px 0', color: 'white' }}>
      <h3 data-aos="flip-up" className="globalSectionHeadline" style={{ marginBottom: '70px' }}> CONNECT </h3>
      <Row gutter={[16, 16]} data-aos="fade-up">
        <Col xs={24} md={9} lg={8}>
          <div>
            {
              contactInfo.map((item) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '15px 10px', gap: '15px' }} >
                  <div className="staticContactInfoIcon" ><FontAwesomeIcon icon={item.icon} style={{ fontSize: '18px' }} /></div>
                  <div>
                    <h5 style={{ margin: '0', paddingBottom: '10px' }}>{item.title}</h5>
                    <p style={{ margin: '0' }}>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </Col>
        <Col xs={24} md={15} lg={16}>
          <ContactForm />
        </Col>
        
      </Row>
    </div>
  );
};

export default ConnectUs;
