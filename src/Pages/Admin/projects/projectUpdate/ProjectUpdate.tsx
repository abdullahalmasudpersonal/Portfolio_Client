import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Spin,
  Typography,
  Upload,
  UploadFile,
} from "antd";
import { useEffect, useState } from "react";
import {
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
} from "../../../../redux/features/project/projectApi";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { resizeImage } from "../../../../Utils/resizeResolution";
import imageCompression from "browser-image-compression";

const ProjectUpdate = () => {
  const { projectId } = useParams();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { data: projectData } = useGetSingleProjectQuery(projectId);
  const [updateProject] = useUpdateProjectMutation();
  ////////// React Quill //////////////////////////
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");

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

  useEffect(() => {
    if (projectData?.data) {
      const {
        name,
        title,
        image,
        live_link,
        description,
        description2,
        features,
        features2,
        client_side_code,
        server_side_code,
        frontEndTechnology,
        backEndTechnology,
      } = projectData.data;

      form.setFieldsValue({
        name,
        title,
        image,
        live_link,
        description,
        description2,
        features,
        features2,
        client_side_code,
        server_side_code,
        frontEndTechnology,
        backEndTechnology,
      });

      const imageFiles = (image || []).map(
        (imageUrl: string, index: number) => ({
          uid: `${index}`,
          name: `Image ${index + 1}`,
          status: "done",
          url: imageUrl,
        })
      );
      setFileList(imageFiles);
    }
  }, [projectData, form]);

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

            // Resize the compressed file to 1000 x 1000 pixels
            const resizedFile = await resizeImage(compressedFile, 1500, 900);

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
    setLoading(true);
    const projectData = {
      name: data?.name,
      title: data?.title,
      live_link: data?.live_link,
      client_side_code: data?.client_side_code,
      server_side_code: data?.server_side_code,
      frontEndTechnology: data?.frontEndTechnology,
      backEndTechnology: data?.backEndTechnology,
      features: data?.features,
      features2: data?.features2,
      description: data?.description,
      description2: data?.description2,
    };

    const existingImages = fileList
      .filter((file) => !file.originFileObj && typeof file.url === "string")
      .map((file) => file.url);
    const newImages = fileList.filter((file) => file.originFileObj);
    const formData = new FormData();
    formData.append("data", JSON.stringify(projectData));
    existingImages.forEach((url) => {
      if (url) {
        formData.append("existingFiles", url);
      }
    });
    for (const file of newImages) {
      if (file.originFileObj) {
        formData.append("files", file.originFileObj as File);
      }
    }

    try {
      const res = await updateProject({ formData, projectId }).unwrap();
      if (res?.success) {
        toast.success(res?.message, { position: "top-right" });
        navigate("/admin/project-list");
      } else {
        toast.error(res?.message, { position: "top-right" });
      }
    } catch (error) {
      toast.error("Failed to update product!", { position: "top-right" });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography>Update Project</Typography>
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
              label="Front-End Technology"
              name="frontEndTechnology"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Back-End Technology"
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
              <ReactQuill
                theme="snow"
                value={features}
                onChange={setFeatures}
              />
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
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
              />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item label="Description 2" name="description2">
              <ReactQuill />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Image Upload" name="images">
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
                disabled={loading === true}
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#ff6347",
                  borderColor: "#ff6347",
                  color: "#ffffff",
                  transition: "all 0.3s ease",
                }}
              >
                {loading && (
                  <Spin
                    indicator={<LoadingOutlined color="white" spin />}
                    size="small"
                  ></Spin>
                )}
                Save Product
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ProjectUpdate;
