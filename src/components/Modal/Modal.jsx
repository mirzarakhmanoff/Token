import React, { memo, useState } from "react";
import { Button, Checkbox, Form, Input, Modal as AntdModal } from "antd";
import axios from "../../api";

const Modal = ({ show, setShow }) => {
  const [form] = Form.useForm();
  const handleRegister = (values) => {
    const [value, setValue] = useState(values);
    axios
      .post("/sign-up", value)
      .then((res) => {
        setShow(false), setValue("");
        form.resetFields();
      })
      .catch((res) => console.log(res));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AntdModal
      title="User Information"
      visible={show}
      onCancel={() => {
        setShow(false);
        form.resetFields();
      }}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleRegister}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="fname"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          fname="lname"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button onClick={() => setValue("")} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </AntdModal>
  );
};

export default memo(Modal);
