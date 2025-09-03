//import React, { useState } from "react";
//import PageTitle from "../../Shared/PageTitle/PageTitle";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { verifyToken } from "../../Utils/verifyToken";
import { setUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (data: any) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data);
      dispatch(setUser({ user: user, token: res.data }));
      toast.success("Loged in");
      navigate(`/admin`);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Something went wrong!!!");
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-dev">
          <div>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Login</h1>
            <Form
              //  name="normal_login"
              className="login-form"
              initialValues={{
                email: "abdullah@gmail.com",
                password: "123456",
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>
                {/*  <div style={{ textAlign: "center", marginTop: "10px" }}>
                Or <Link to="/register">register now!</Link>
              </div> */}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* {errorElement} */
}
{
  /*   <p className="text-center">
            <small>
              Alrady have an account?
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span style={{ color: "purple" }}> Register</span>
              </Link>
            </small>
          </p> */
}
