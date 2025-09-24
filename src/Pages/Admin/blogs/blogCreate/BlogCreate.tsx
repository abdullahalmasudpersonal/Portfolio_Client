import { useEffect, useRef, useState } from "react";
import { Form, Input, Button, Row, Col, Upload, UploadFile, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import imageCompression from "browser-image-compression";
import { toast } from "sonner";
import { useCreateBlogMutation } from "../../../../redux/features/blog/BlogApi";
import { useNavigate } from "react-router-dom";
import { resizeImage } from "@/Utils/resizeResolution";
import { TBlog } from "@/types/blog.types";
import ReactQuill from "react-quill";
import { DeltaStatic } from "quill";

const BlogCreate = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [createBlog] = useCreateBlogMutation();
  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();

      // Properly typed matcher
      editor.clipboard.addMatcher(Node.ELEMENT_NODE, (_node: Node, delta: DeltaStatic) => {
        delta.ops?.forEach((op) => {
          if (op.attributes) {
            delete op.attributes.background;
            delete op.attributes.color;
            delete op.attributes.font;
          }
        });
        return delta;
      });
    }
  }, []);

  const handleChange = async ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    if (newFileList.length > 0) {
      const file = newFileList[newFileList.length - 1]; // শুধুমাত্র প্রথম ইমেজ নিন
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

          // Resize the compressed file
          const resizedFile = await resizeImage(compressedFile, 1350, 450);

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

  const onFinish = async (values: TBlog) => {
    setLoading(true);

    try {
      const blogData = {
        name: values?.name,
        title: values?.title,
        card_description: values?.card_description,
        description: values?.description,
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(blogData));
      fileList.forEach((file) => {
        formData.append("file", file.originFileObj as File);
      });
      const res = await createBlog(formData).unwrap();
      if (res?.success === true) {
        toast.success(res?.message, { position: "top-right" });
        form.resetFields();
        setFileList([]);
        navigate(`/admin/blog-list`);
      } else {
        toast.error(res?.message, { position: "top-right" });
        console.log(res.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error, { position: "top-right" });
    } finally {
      setLoading(false);
    }

  };

  return (
    <div>
      {/* <PageTitle pageTitle="Create Blog || Admin" /> */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#1c6fc2ff', borderRadius: '5px 5px 0 0' }}>
        <h5 style={{ color: 'white', margin: "0", fontWeight: '700' }}>Create Blog</h5>
      </div>
      <div style={{ paddingTop: "20px", }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ maxWidth: "980px", margin: "0 auto", backgroundColor: '#4187ceff', padding: '20px', borderRadius: '5px' }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24}>
              <Form.Item className="my-label"
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter the name" }]}
              >
                <Input placeholder="Enter name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Form.Item className="my-label"
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please enter the title" }]}
              >
                <Input placeholder="Enter title" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Form.Item className="my-label"
                label="Card Description"
                name="card_description"
                rules={[{ required: true, message: "Please enter the card_description" }]}
              >
                <ReactQuill ref={quillRef} style={{ background: 'white' }} placeholder="Write your card_description" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Form.Item className="my-label"
                label="Description"
                name="description"
                rules={[{ required: true, message: "Please enter the description" }]}
              >
                <ReactQuill ref={quillRef} style={{ background: 'white' }} placeholder="Write your description" />
              </Form.Item>
            </Col>
            <Col xs={24} >
              <div
                style={{
                  width: '300px', height: '100px',
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  borderRadius: "2px",
                }}
              >
                {fileList.length > 0 && (
                  <Image
                    width={300}
                    height={100}
                    src={fileList[0].url}
                    style={{ borderRadius: "2px" }}
                  />
                )}
              </div>
              <div style={{ width: '300px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                      backgroundColor: "#003e70ff",
                      color: "#ffffff",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Blog Image
                  </Button>
                </Upload>
              </div>
            </Col>
            <Col xs={24}>
              <Form.Item style={{ textAlign: "center" }}>
                <Button disabled={loading}
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: "#004196ff", padding: "10px 50px" }}
                >
                  {loading ? "Blog creating..." : "Create Blog"}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default BlogCreate;
