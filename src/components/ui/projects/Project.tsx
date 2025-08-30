import { TProject } from "@/types/project.types";
import { faCircleInfo, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import styled from "styled-components";

const Project = (project: TProject) => {

    const {
        _id,
        name,
        title,
        features,
        image,
        live_link,
        client_side_code,
        server_side_code,
    } = project;

    const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.67) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.47) 0px 2px 6px 2px;
  transition: 0.5s;

  &:hover {
    transform: translateY(-8px);
  }
`;

    return (
        <ProjectDiv data-aos="zoom-in-right" /* className="projectDiv" */>
            <Carousel effect="fade" >
                {
                    image?.map((imgSrc, index) => (
                        <div key={index} style={{}}>
                            <img src={imgSrc} alt="banner img" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '5px 5px 0 0' }} />
                        </div>
                    ))
                }
            </Carousel>
            <div style={{ padding: '10px', flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h5 style={{ margin: '15px 0 5px', }}>
                    <a
                        href={live_link}
                        rel="noreferrer"
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        {name}{" "}
                        <FontAwesomeIcon icon={faEye} style={{ fontSize: "15px" }} />{" "}
                    </a>
                </h5>
                <p>{title}</p>
                <div style={{ fontSize: '13px', paddingLeft: '20px', flexGrow: 1 }} dangerouslySetInnerHTML={{ __html: features }} />
                <small style={{ display: 'flex', justifyContent: 'end', marginTop: "10px" }}>
                    <a href={`/projects/${_id}`} target="_blank">
                        <button style={{ background: "#014688ff", border: '1px solid #666666ff', color: 'white', borderRadius: '50px', padding: '5px 15px', }}>
                            <FontAwesomeIcon icon={faCircleInfo} /> Details
                        </button>
                    </a>
                    <a href={client_side_code} target="_blank" rel="noreferrer">
                        <button style={{ background: "#014688ff", border: '1px solid #666666ff', color: 'white', borderRadius: '50px', padding: '5px 15px', marginLeft: '8px' }}>
                            <i className="fab fa-github"></i> Client
                        </button>
                    </a>
                    <a href={server_side_code} target="_blank" rel="noreferrer">
                        <button style={{ background: "#014688ff", border: '1px solid #666666ff', color: 'white', borderRadius: '50px', padding: '5px 15px', marginLeft: '8px' }}>
                            <i className="fab fa-github"></i> Server
                        </button>
                    </a>
                </small>
            </div>
        </ProjectDiv>
    );
};

export default Project;