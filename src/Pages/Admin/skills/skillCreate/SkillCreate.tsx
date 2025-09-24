import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, Row, Upload, UploadFile } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import { useCreateSkillMutation } from "../../../../redux/features/skills/skillsApis";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import { resizeImage } from "../../../../Utils/resizeResolution";
import { TSkill } from "../../../../types/skill.types";

const SkillCreate = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [createSkill] = useCreateSkillMutation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = async ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    if (newFileList.length > 0) {
      const file = newFileList[newFileList.length - 1];
      if (file.originFileObj) {
        try {
          // Compress the file
          const options = {
            maxSizeMB: 0.1,
            useWebWorker: true,
          };

          const compressedBlob = await imageCompression(
            file.originFileObj as File,
            options
          );

          const compressedFile = new File([compressedBlob], file.name, {
            type: file.type,
            lastModified: file.originFileObj.lastModified,
          });

          // Resize the compressed file
          const resizedFile = await resizeImage(compressedFile, 200, 200);

          // Update fileList with only one processed file
          setFileList([
            {
              ...file,
              url: URL.createObjectURL(resizedFile),
              originFileObj: resizedFile,
              size: resizedFile.size,
            } as UploadFile<unknown>,
          ]);
        } catch (error) {
          console.error("Error compressing or resizing image:", error);
        }
      }
    }
  };

  const onFinish = async (values: TSkill) => {
    setLoading(true);

    try {
      const skillData = {
        title: values?.title,
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(skillData));
      formData.append("imageCategory", "skills");
      fileList.forEach((file) => {
        formData.append("file", file.originFileObj as File);
      });
      const res = await createSkill(formData).unwrap();
      if (res?.success === true) {
        toast.success(res?.message, { position: "top-right" });
        form.resetFields();
        setFileList([]);
        navigate(`/admin/skill-list`);
      } else {
        toast.error(res?.message, { position: "top-right" });
        console.log(res.message);
      }

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
      }}
    >
      <h3 className="text-center mt-3">Create Skill</h3>
      <div
        style={{
          padding: "20px",
          border: "1px solid gray",
          width: "500px",
          margin: "auto",
        }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ maxWidth: "980px", minHeight: "500px", margin: "0 auto" }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24}>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please enter the title" }]}
              >
                <Input placeholder="Enter title" />
              </Form.Item>
            </Col>

            <div
              style={{
                height: "230px",
                // width: "250px",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  height: "160px",
                  width: "180px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  borderRadius: "2px",
                }}
              >
                {fileList.length > 0 && (
                  <Image
                    width={180}
                    height={160}
                    src={fileList[0].url}
                    style={{ borderRadius: "2px" }}
                  />
                )}
              </div>

              <Upload
                accept="image/*"
                fileList={fileList}
                onChange={handleChange}
                beforeUpload={() => false}
                showUploadList={false}
                multiple={false}
              >
                <Button
                  type="primary"
                  icon={<UploadOutlined />}
                  style={{
                    backgroundColor: "orange",
                    marginLeft: "28px",
                  }}
                >
                  Skill Image
                </Button>
                (200*200px)
              </Upload>
            </div>
          </Row>
          <Form.Item style={{ textAlign: "center" }}>
            <Button disabled={loading}
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "orange", padding: "10px 50px" }}
            >
              {loading ? 'Skill Creating...' : ' Create Skill'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SkillCreate;
