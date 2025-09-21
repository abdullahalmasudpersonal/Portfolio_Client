import { useGetSingleSkillQuery, useUpdateSkillMutation } from "@/redux/features/skills/skillsApis";
import { resizeImage } from "@/Utils/resizeResolution";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Spin, Typography, Upload, UploadFile } from "antd";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
import { toast } from "sonner";

const SkillUpdate = () => {
    const [form] = Form.useForm();
    const { skillId } = useParams<{ skillId: string }>();
    const [loading, setLoading] = useState(false);
    const { data: singleSkill, isLoading } = useGetSingleSkillQuery(skillId);
    const [updateSkill] = useUpdateSkillMutation();
    const [imageFile, setImageFile] = useState<UploadFile[]>([]);
    const navigate = useNavigate();

    const handleImageChange = async ({
        fileList: newFileList,
    }: {
        fileList: UploadFile[];
    }) => {
        const compressedFileList = (await Promise.all(
            newFileList.map(async (file) => {
                if (file.originFileObj) {
                    try {
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

                        const resizedFile = await resizeImage(compressedFile, 200, 200);

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
        setImageFile(compressedFileList.slice(-1));
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    useEffect(() => {
        if (singleSkill?.data) {
            const { title, image } = singleSkill.data;

            form.setFieldsValue({
                name: title,
            });

            if (image) {
                setImageFile([
                    {
                        uid: "0",
                        name: "skill-image",
                        status: "done",
                        url: image,
                    },
                ]);
            }
        }
    }, [singleSkill, form]);

    const handleSubmit = async (values: FieldValues) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("data", JSON.stringify({ title: values.name }));
            if (imageFile[0]?.originFileObj) {
                formData.append("file", imageFile[0].originFileObj as File);
            }
            const res = await updateSkill({ id: skillId!, data: formData }).unwrap();

            if (res?.success) {
                toast.success("Skill updated successfully!");
                navigate("/admin/skill-list");
            }else{
                toast.error("Skill updated failed!");
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>
            <Typography.Title level={4}>Update Skill</Typography.Title>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter skill name" }]} >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <Form.Item label="Image Upload" name="images">
                            <Upload
                                accept="image/*"
                                listType="picture-card"
                                fileList={imageFile}
                                onChange={handleImageChange}
                                beforeUpload={() => false} maxCount={1}
                            >
                                {imageFile.length >= 1 ? null : uploadButton}
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <Form.Item>
                            <Button
                                disabled={loading || isLoading}
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
                                Update Skill
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SkillUpdate;