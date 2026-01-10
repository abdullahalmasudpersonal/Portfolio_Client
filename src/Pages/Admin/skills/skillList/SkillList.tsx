import { Button, Popconfirm, Switch, Table, TableColumnsType } from "antd";
import {
  useDeleteSkillMutation,
  useGetSkillsQuery,
  useUpdateSkillShowStatusMutation,
} from "../../../../redux/features/skills/skillsApis";
import { TSkill } from "../../../../types/skill.types";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SkillList = () => {
  const navigate = useNavigate();
  const { data: skilldata } = useGetSkillsQuery({});
  const [deleteSkill] = useDeleteSkillMutation({});
  const [updateSkillShowStatus] = useUpdateSkillShowStatusMutation({});
  const [loadingSkillId, setLoadingSkillId] = useState<string | null>(null);

  const handleDeleteSkill = async (skillId: string) => {
    const res = await deleteSkill(skillId).unwrap();
    if (res?.success) {
      toast.success("Delete skill successfully!", {
        duration: 1000,
        position: "top-right",
      });
    }
  };

  const dataTable = skilldata?.data?.map(({ _id, title, show, image }: TSkill) => ({
    key: _id,
    title,
    show,
    image,
  }));

  const showChangeSkill = async (_id: string, checked: boolean) => {
    try {
      setLoadingSkillId(_id);
      const res = await updateSkillShowStatus({
        id: _id,
        show: checked,
      }).unwrap();

      if (res?.success) {
        toast.success("Skill visibility updated successfully!", {
          duration: 1000,
          position: "top-right",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to update skill visibility");
    } finally {
      setLoadingSkillId(null);
    }
  };

  const columns: TableColumnsType<TSkill> = [
    {
      title: "Skill Name",
      key: "title",
      width: 300,
      render: (item) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={item?.image}
            alt={item.name}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          <span>{item.title}</span>
        </div>
      ),
    },
    {
      title: "Show",
      key: "show",
      render: (item) => (
        <div>
          <Switch loading={loadingSkillId === item._id} disabled={loadingSkillId === item._id} checked={item.show} onChange={(checked) => showChangeSkill(item.key, checked)} />
        </div>
      ),
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
            {/* <Link to={`/categore/product/${item.key}`}> */}
            <Button color="primary" variant="filled">
              <EyeOutlined />
            </Button>
            {/* </Link> */}
            <Button
              onClick={() => navigate(`/admin/skill-update/${item.key}`)}
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
              onConfirm={() => handleDeleteSkill(item?.key)}
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
      <Table
        title={() => <h5 style={{ margin: 0 }}>Top Products</h5>}
        columns={columns}
        dataSource={dataTable}
        pagination={false}
        scroll={{ x: true }}
        style={{ overflowX: "auto" }}
        sticky
      />
    </div>
  );
};

export default SkillList;
