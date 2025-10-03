import emailjs from "@emailjs/browser";
import { Form, Input, Button, Col, Row, message } from "antd";
import { useState } from "react";

type Message = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const sendEmail = (values: Message) => {
     setLoading(true);
    emailjs
      .send(
        "service_lbjmldd",
        "template_j7t6o0f",
        values,
        "C2bvyJo1JsGP7LPbX"
      )
      .then(
        () => {
          message.success("Email sent successfully! I will contact you soon.");
           form.resetFields();
            setLoading(false);
        },
        (error) => {
          message.error("Failed to send email. Please try again.");
          console.error("Error:", error.text);
           setLoading(false);
        }
      );
  };

  return (
    <Form form={form} layout="vertical" onFinish={sendEmail}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label={<span style={{ color: "white" }}>Your Name</span>}
            name="fullName"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label={<span style={{ color: "white" }}>Your Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label={<span style={{ color: "white" }}>Subject</span>}
        name="subject"
        rules={[{ required: true, message: "Please enter a subject!" }]}
      >
        <Input placeholder="Subject" />
      </Form.Item>

      <Form.Item
        label={<span style={{ color: "white" }}>Message</span>}
        name="message"
        rules={[{ required: true, message: "Please enter your message!" }]}
      >
        <Input.TextArea rows={6} placeholder="Message" />
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          shape="round"
          size="large" disabled={loading}
          loading={loading} style={{background:'#014688ff', color:'white', padding:'5px 20px 8px 20px'}}
        >
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
