import { useGetAllProjectQuery } from "../../../../redux/features/project/projectApi";
import { Button, Popconfirm, Table, TableColumnsType } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { TProject } from "../../../../types/project.types";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { formatDate } from "../../../../Utils/formatDate";
import Loader2 from "../../../Shared/loader/Loader2";

const ListProject = () => {
  const navigate = useNavigate();
  const { data: projectData, isLoading } = useGetAllProjectQuery({});
  console.log(projectData);

  const navigateToUpdateProject = (id: string) => {
    navigate(`/admin/update-project/${id}`);
  };

  const dataTable = projectData?.data?.map(
    ({
      _id,
      name,
      title,
      image,
      live_link,
      description,
      description2,
      features,
      features2,
      serialNumber,
      client_side_code,
      server_side_code,
      createdAt,
    }: TProject) => ({
      key: _id,
      name,
      title,
      image,
      live_link,
      description,
      description2,
      features,
      features2,
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
      width: 200,
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
            to={`/categore/product/${item.key}`}
          >
            <span>{item.name}</span>
          </Link>
        </div>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
      width: 300,
    },
    {
      title: "Live Link",
      key: "live_link",
      align: "center",
      width: 150,
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
      width: 150,
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
      width: 150,
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
      width: 150,
      render: (createdAt: string) => formatDate(createdAt),
    },
    {
      title: "serialNumber",
      dataIndex: "serialNumber",
      key: "serialNumber",
      align: "center",
      width: 130,
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
            <Link to={`/categore/product/${item.key}`}>
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
              //   onConfirm={() => deleteProduct(item?.key)}
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
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Loader2 />
        </div>
      ) : (
        <div style={{ padding: "10px" }}>
          <Table
            columns={columns}
            dataSource={dataTable}
            pagination={false}
            scroll={{ x: true, y: 500 }}
            style={{ width: "100%" }}
            sticky
          />
        </div>
      )}
    </div>
  );
};

export default ListProject;
