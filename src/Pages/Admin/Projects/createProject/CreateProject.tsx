import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Typography,
  Upload,
  UploadFile,
} from "antd";
import { useState } from "react";
import ReactQuill from "react-quill";
import { resizeImage } from "../../../../Utils/resizeResolution";
import { PlusOutlined } from "@ant-design/icons";
import imageCompression from "browser-image-compression";
import { useCreateProjectMutation } from "../../../../redux/features/project/projectApi";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

const CreateProject = () => {
  const [form] = Form.useForm();
  const [createProject] = useCreateProjectMutation();
  /////////////////// images upload /////////////
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  //////////////////////handle preview image ///////////////////
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file: UploadFile) => {
    setPreviewImage(file.url || file.thumbUrl || "");
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
    setPreviewOpen(true);
  };

  ////////////////// handle upload image /////////////
  const handleChange = async ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    const compressedFileList = (await Promise.all(
      newFileList.map(async (file) => {
        if (file.originFileObj) {
          try {
            // Compress the file
            const options = {
              maxSizeMB: 1,
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
            // console.log(compressedFile, "compressedfile");
            // Resize the compressed file to 1000 x 1000 pixels
            const resizedFile = await resizeImage(compressedFile, 1500, 900);
            // console.log(resizedFile, "resizefiles");
            return {
              ...file,
              url: URL.createObjectURL(resizedFile),
              originFileObj: resizedFile,
              size: resizedFile.size,
            } as UploadFile<unknown>;
          } catch (error) {
            console.error("Error compressing or resizing image:", error);
            return file;
          }
        }
        return file;
      })
    )) as UploadFile<unknown>[];

    setFileList([...compressedFileList]);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  /////////////// handle update prodcut //////////////////
  const handleSubmit = async (data: FieldValues) => {
    Modal.confirm({
      title: "Are you sure you want to create project !",
      okText: "Yes",
      cancelText: "No",
      onOk: async () => {
        try {
          const projectData = {
            name: data?.name,
            title: data?.title,
            live_link: data?.live_link,
            client_side_code: data?.client_side_code,
            server_side_code: data?.server_side_code,
            features: data?.features,
            features2: data?.features2,
            description: data?.description,
            description2: data?.description2,
            frontEndTechnology: data?.frontEndTechnology,
            backEndTechnology: data?.backEndTechnology,
          };

          const formData = new FormData();
          formData.append("data", JSON.stringify(projectData));
          formData.append("imageCategory", "projects");
          fileList.forEach((file) => {
            formData.append("files", file.originFileObj as File);
          });

          const res = await createProject(formData).unwrap();
          if (res?.success === true) {
            toast.success(res?.message, { position: "top-right" });
            form.resetFields();
            setFileList([]);
          }
        } catch (error) {
          if (error && typeof error === "object" && "data" in error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const errorData = (error as any).data;
            if (
              errorData &&
              typeof errorData === "object" &&
              "message" in errorData
            ) {
              toast.error(errorData.message, { position: "top-right" });
              form.resetFields();
              setFileList([]);
              console.log(errorData.message);
            }
          } else {
            console.log("An unknown error occurred");
          }
        }
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography>Create Project</Typography>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Live Link"
              name="live_link"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Client Side Code"
              name="client_side_code"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Server Side Code"
              name="server_side_code"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Front End Technology"
              name="frontEndTechnology"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={24}>
            <Form.Item
              label="Back End Technology"
              name="backEndTechnology"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Features"
              name="features"
              rules={[{ required: true }]}
            >
              <ReactQuill />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Features 2" name="features2">
              <ReactQuill />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true }]}
            >
              <ReactQuill />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Description 2" name="description2">
              <ReactQuill />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Image Upload (1500/900)" name="images">
              <Upload
                accept="image/*"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={() => false}
                multiple
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>

              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#ff6347",
                  borderColor: "#ff6347",
                  color: "#ffffff",
                  transition: "all 0.3s ease",
                }}
              >
                Save Product
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
// backEndTechnology;

export default CreateProject;
