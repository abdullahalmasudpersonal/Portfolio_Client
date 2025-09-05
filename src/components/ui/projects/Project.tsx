import { TProject } from "@/types/project.types";
import {  faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel } from "antd";
import './Project.css';
import { GithubOutlined, InfoCircleOutlined } from "@ant-design/icons";

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

    return (
        <div className="projectDiv">
            <Carousel effect="fade" autoplay>
                {
                    image?.map((imgSrc, index) => (
                        <div key={index} style={{}}>
                            <img src={imgSrc} alt="banner img" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '5px 5px 0 0' }} />
                        </div>
                    ))
                }
            </Carousel>
            <div style={{ padding: '10px', flexGrow: 1, display: "flex", flexDirection: "column", }}>
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
                    <a href={`/project/${_id}`} target="_blank">
                        <Button style={{ paddingBottom:'2px', color: 'white', background: "#014688ff", marginRight: '8px' }} size="small" icon={<InfoCircleOutlined />}>Details</Button>
                    </a>
                    <a href={client_side_code} target="_blank" rel="noreferrer">
                        <Button style={{ paddingBottom:'2px', color: 'white', background: "#014688ff", marginRight: '8px' }} size="small" icon={<GithubOutlined />}>Client</Button>
                    </a>
                    <a href={server_side_code} target="_blank" rel="noreferrer">
                        <Button style={{ paddingBottom:'2px', color: 'white', background: "#014688ff", }} size="small" icon={<GithubOutlined />}>Client</Button>
                    </a>
                </small>
            </div>
        </div>
    );
};

export default Project;