import React, { useEffect, useState } from "react";
import axios from "../api";
import { FaHeart, FaTrash } from "react-icons/fa";
import { Button, Checkbox, Form, Input, Modal as AntdModal } from "antd";

const Products = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [reload, setReload] = useState(false);

  const handleRegister = (values) => {
    console.log(values);
    axios
      .post("/blogs", values)
      .then((res) => {
        setShow(false), setReload((p) => !p);
      })
      .catch((res) => console.log(res));
    setShow(false);
  };

  const handleDelete = (id) => {
    axios.delete(`blogs/${id}`).then(() => setReload((p) => !p));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    axios
      .get("/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setData(res.data.payload))
      .catch((err) => console.error("Error fetching data", err));
  }, [token, reload]);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {data?.map((blog) => (
          <div
            key={blog.id}
            className="w-full max-w-lg bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h4>
                <p className="text-gray-700">{blog.desc}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-500">
              <button
                className="flex items-center space-x-1 hover:text-red-500"
                onClick={() => console.log("Like button clicked")}
              >
                <FaHeart />
                <span>Like</span>
              </button>
              <button
                className="flex items-center space-x-1 hover:text-red-500"
                onClick={() => handleDelete(blog._id)}
              >
                <FaTrash />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[72%] mx-auto  my-3">
        <Button onClick={() => setShow(true)}>Add Comment</Button>
      </div>

      <div>
        <AntdModal
          title="User Information"
          visible={show}
          onCancel={() => setShow(false)}
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
              label="Title"
              name="title"
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
              label="Description"
              name="desc"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </AntdModal>
      </div>
    </>
  );
};

export default Products;
