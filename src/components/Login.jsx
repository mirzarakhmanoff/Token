import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "../api";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal/Modal";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = useSelector((state) => state.token);
  console.log(token);
  const [show, setShow] = useState(false);

  const onFinish = (values) => {
    axios
      .post("/admins/sign-in", values)
      .then((res) => {
        console.log(res.data.token);
        dispatch({ type: "LOGIN", payload: res.data.payload.token });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            initialValue={"mirzarakhmanoff"}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            initialValue={"12345678"}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-2 mb-4"
            >
              Submit
            </Button>

            <Button
              type="default"
              className="w-full py-2"
              onClick={() => setShow(true)}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <Modal show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default Login;
