import React, { useState } from "react";
import Header from "../header/header";
import { Form, Input, Button, message } from "antd";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinishRegister = async (values) => {
    try {
        setLoading(true);
        const response=await api.post('/register',values);
        console.log(response.data);
        setTimeout(() => {
            setLoading(false);
            navigate('/login');
        }, 2000);
    } catch (error) {
        message.error('Bu Kullanıcı Mevcut');
        setLoading(false);
    }
    
  };
  return (
    <div>
      <Header />

      <div className="container mx-auto my-auto flex items-center justify-around">
        <div className="leftRegister">
          <h1 className="text-3xl font-bold mb-5 text-center">Kayıt Ol</h1>
          <Form layout="vertical" onFinish={onFinishRegister} form={form}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email Alanı Boş Geçilemez!",
                },
              ]}
            >
              <Input className="h-10 min-w-[300px]" placeholder="Email"/>
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Kullanıcı Adı Alanı Boş Geçilemez!",
                },
              ]}
            >
              <Input
                className="h-10 min-w-[300px]"
                placeholder="Kullanıcı Adı"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Şifre Alanı Boş Geçilemez!",
                },
              ]}
            
            >
              <Input.Password
                className="h-10 min-w-[300px]"
                placeholder="Şifre"
                minLength={5}
                maxLength={8}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Lütfen Şifreyi Tekrar Girin!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Şifreler eşleşmiyor!"));
                  },
                }),
              ]}
            >
              <Input.Password
                className="h-10 min-w-[300px]"
                placeholder="Tekrar Şifre"
                minLength={5}
                maxLength={8}
              />
            </Form.Item>

            <Form.Item className="flex justify-center">
              <Button
                size="large"
                style={{
                  backgroundColor: "#138D75 ",
                  borderColor: "#138D75",
                  color: "white",
                }}
                htmlType="submit"
                loading={loading}
              >
                Kayıt Ol
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="rightRegister">
          <img src="bg.png" alt="" width={600} height={800} />
        </div>
      </div>
    </div>
  );
};

export default Register;
