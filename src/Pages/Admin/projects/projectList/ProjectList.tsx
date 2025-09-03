// import { useGetAllProjectQuery } from "../../../../redux/features/project/projectApi";
import { Button, Col, ConfigProvider, Popconfirm, Row, Select, Table, TableColumnsType } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { TProject } from "../../../../types/project.types";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { formatDate } from "../../../../Utils/formatDate";
import Loader2 from "../../../Shared/loader/Loader2";
import { useState } from "react";
import { useGetAllProjectQuery } from "@/redux/features/project/projectApi";

const { Option } = Select;

const ProjectList = () => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, /* setCurrentPage */] = useState(1);
  const navigate = useNavigate();
  const { data: projectData, isLoading: projectIsLoading } = useGetAllProjectQuery({});

  const navigateToUpdateProject = (id: string) => {
    navigate(`/admin/project-update/${id}`);
  };

  const dataTable = projectData?.data?.map(
    ({
      _id,
      name,
      image,
      live_link,
      serialNumber,
      client_side_code,
      server_side_code,
      createdAt,
    }: TProject) => ({
      key: _id,
      name,
      image,
      live_link,
      serialNumber,
      client_side_code,
      server_side_code,
      createdAt,
    })
  );

  const columns: TableColumnsType<TProject> = [
    {
      title: "Product Name",
      key: "name",
      render: (item) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={item.image?.[0]}
            alt={item.name}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/project/${item.key}`}
          >
            <span>{item.name}</span>
          </Link>
        </div>
      ),
    },
    {
      title: "Live Link",
      key: "live_link",
      align: "center",
      render: (item) => (
        <Link to={item?.live_link} target="_blank">
          <Button>Live</Button>
        </Link>
      ),
    },
    {
      title: "Client Code",
      key: "client_side_code",
      align: "center",
      render: (item) => (
        <Link to={item?.client_side_code} target="_blank">
          <Button>Client Code</Button>
        </Link>
      ),
    },
    {
      title: "Server Code",
      key: "server_side_code",
      align: "center",
      render: (item) => (
        <Link to={item?.server_side_code} target="_blank">
          <Button>Server Code</Button>
        </Link>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "date",
      align: "center",
      render: (createdAt: string) => formatDate(createdAt),
    },
    {
      title: "serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
      align: "center",
      width:150
    },
    {
      title: "Action",
      key: "category",
      align: "center",
      render: (item) => {
        return (
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <Link to={`/project/${item.key}`}>
              <Button color="primary" variant="filled">
                <EyeOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => navigateToUpdateProject(item?.key)}
              variant="filled"
              style={{
                backgroundColor: "#FFF8DC",
                border: "none",
              }}
            >
              <EditOutlined style={{ color: "#FFA500" }} />
            </Button>

            <Popconfirm
              title="Are you sure you want to delete this product?"
              // onConfirm={() => deleteProduct(item?.key)}
              okText="Yes"
              cancelText="No"
            >
              <Button color="danger" variant="filled">
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#1c6fc2ff', borderRadius: '5px 5px 0 0' }}>
        <h5 style={{ color: 'white', margin: "0", fontWeight: '700' }}>
          All Blog List ({projectData?.data?.length})
        </h5>
        <Row>
          <Col>
            <Select
              defaultValue={10}
              style={{ width: 120 }}
              onChange={(value) => setPageSize(value)}
            >
              <Option value={10}>10 / page</Option>
              <Option value={20}>20 / page</Option>
              <Option value={30}>30 / page</Option>
              <Option value={50}>50 / page</Option>
            </Select>
          </Col>
        </Row>
      </div>
      {
        projectIsLoading ? <Loader2 /> : <div style={{ paddingTop: '20px', }}> <ConfigProvider theme={{ components: { Table: { headerBorderRadius: 0, } } }}>
          <Table columns={columns} dataSource={dataTable} pagination={{
            pageSize: pageSize,
            current: currentPage,
            // total: blogsData?.meta?.total,
            // onChange: handleTableChange,
            showSizeChanger: false,
          }}
            scroll={{ x: "max-content", y: 570 }}
            style={{ width: "100%" }}
            sticky />
        </ConfigProvider>
        </div>
      }

    </div>
  );
};

export default ProjectList;
