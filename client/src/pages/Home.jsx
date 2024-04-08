import React, { useState } from "react";
import Header from "../components/header/header";
import { Form, Select, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Home = () => {
  const [form] = Form.useForm();
  const [selectOption, setSelectOption] = useState("");

  const handleChange = (value) => {
    setSelectOption(value);
  };

  const handleForm = (values) => {
    console.log(values, "values");
    form.resetFields();
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto  flex justify-center items-center gap-8">
        <div className="leftHome">
          <h1 className="font-bold text-3xl">Kiralık veya Satılık Daireler</h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            velit excepturi dolores et magni exercitationem, ex vitae.
            Accusantium, architecto. Possimus.
          </p>

          <div>
            <Form onFinish={handleForm} form={form}>
              <div className="flex gap-4 items-center">
                <Form.Item name="selectOption">
                  <Select
                    defaultValue="Seçiniz"
                    style={{
                      width: 120,
                    }}
                    options={[
                      {
                        value: "buy",
                        label: "Satın Al",
                      },
                      {
                        value: "rent",
                        label: "Kirala",
                      },
                    ]}
                    onChange={handleChange}
                  ></Select>
                </Form.Item>

                <Form.Item name="city">
                  <Input placeholder="Şehir" />
                </Form.Item>

                <Form.Item name="minPrice">
                  <Input className="mx-2" placeholder="Min" />
                </Form.Item>

                <Form.Item name="maxPrice">
                  <Input className="mx-2" placeholder="Max" />
                </Form.Item>

                <Form.Item>
                  <Button
                    style={{
                      backgroundColor: "#F4D03F",
                      borderColor: "yellow",
                      color: "black",
                      textAlign: "center",
                    }}
                    size="large"
                    icon={<SearchOutlined />}
                    className="px-3"
                    shape="circle"
                    htmlType="submit"
                  />
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div className="rightHome">
          <img src="bg.png" alt="" width={600} height={800} />
        </div>
      </div>
    </div>
  );
};

export default Home;
