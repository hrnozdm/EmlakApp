import React, { useState } from "react";
import Header from "../components/header/header";
import { Form, Input, Button, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useDispatch,useSelector} from "react-redux";
import { addPost } from "../redux/PosSlice";
const { Option } = Select;

const CreatePosPage = () => {
    const dispatch=useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  const onFinish = (values) => {
    setLoading(true);
    dispatch(addPost(values));
    form.resetFields();
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please input the price!" }]}
          >
            <Input prefix="$" />
          </Form.Item>

          <Form.Item
            name="img"
            label="Image URL"
            rules={[{ required: true, message: "Please input the image URL!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Bu Alan Boş Bırakılmaz!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: "Bu Alan Boş Bırakılmaz!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: "Bu Alan Boş Bırakılmaz!" }]}
          >
            <Select>
              <Option value="buy">Buy</Option>
              <Option value="rent">Rent</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="property"
            label="Property Type"
            rules={[
              { required: true, message: "Bu Alan Boş Bırakılmaz!" },
            ]}
          >
            <Select>
              <Option value="apartment">Apartment</Option>
              <Option value="house">House</Option>
              <Option value="condo">Condo</Option>
              <Option value="land">Land</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Bu Alan Boş Bırakılmaz!" },
            ]}
            
          >
            <ReactQuill value={description} onChange={setDescription} style={{height:'100px'}}/>
          </Form.Item>

          <Form.Item >
            <Button
              size="large"
              style={{
                backgroundColor: "#138D75 ",
                borderColor: "#138D75",
                color: "white",
              }}
              htmlType="submit"
              className="my-9"
              loading={loading}
            >
              İlan Oluştur
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreatePosPage;
