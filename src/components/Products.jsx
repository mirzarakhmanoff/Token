import React, { memo, useEffect, useState } from "react";
import axios from "../api";
import { FaHeart, FaTrash } from "react-icons/fa";
import { Button, Form, Input, Modal as AntdModal } from "antd";
import { useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";

const Products = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [reload, setReload] = useState(false);
  const profile = useSelector((state) => state.profile);
  const [editId, setEditId] = useState(null);

  const [form] = Form.useForm();

  useEffect(() => {
    axios
      .get("/blogs", { params: { limit: 12 } })
      .then((res) => setData(res.data.payload))
      .catch((err) => console.error("Error fetching data", err));
  }, [token, reload]);

  const handleRegister = (values) => {
    axios
      .post("/blogs", values)
      .then(() => {
        setShow(false);
        setReload((prev) => !prev);
        form.resetFields();
      })
      .catch((err) => console.error("Error submitting data", err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`blogs/${id}`)
      .then(() => setReload((prev) => !prev))
      .catch((err) => console.error("Error deleting post", err));
  };

  const handleEdit = (id) => {
    setEditId(id);
    setShow(true);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        {data.map((blog) => (
          <div
            key={blog.id}
            className="w-full max-w-md bg-white shadow-md rounded-lg p-4 border border-gray-300 transition-transform transform hover:scale-105"
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
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-medium text-gray-900">
                    {blog.title}
                  </h4>
                  <p className="text-sm text-gray-600">{blog.userId.fname}</p>
                </div>
                <p className="text-gray-700">{blog.desc}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <button
                className="flex items-center space-x-1 hover:text-red-600"
                onClick={() => console.log("Like button clicked")}
              >
                <FaHeart />
                <span>Like</span>
              </button>
              {profile?._id === blog.userId._id && (
                <div className="flex items-center space-x-2">
                  <button
                    className="flex items-center space-x-1 text-red-600 hover:bg-red-100 p-1 rounded"
                    onClick={() => handleDelete(blog._id)}
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                  <button
                    className="flex items-center space-x-1 text-blue-600 hover:bg-blue-100 p-1 rounded"
                    onClick={() => handleEdit(blog._id)}
                  >
                    <MdEdit />
                    <span>Edit</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-md mx-auto my-4">
        <Button
          type="primary"
          onClick={() => setShow(true)}
          className="w-full rounded-md shadow-md"
        >
          Add Comment
        </Button>
      </div>

      <AntdModal
        title="Add Comment"
        visible={show}
        onCancel={() => setShow(false)}
        footer={null}
        className="modal"
      >
        <Form
          name="basic"
          layout="vertical"
          form={form} // Assign form instance
          initialValues={{ remember: true }}
          onFinish={handleRegister}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="desc"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </AntdModal>
    </>
  );
};

export default memo(Products);
