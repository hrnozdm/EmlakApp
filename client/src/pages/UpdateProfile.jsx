import React, { useEffect } from "react";
import Header from "../components/header/header";
import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser,setUser } from "../redux/GetUserSlice";
import {useNavigate} from "react-router-dom";
import api from "../api/api";

const UpdateProfile = () => {
  const [form] = Form.useForm();
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const userData = useSelector((state) => state.getUser);
  console.log(userData);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getUser(id));
  }, [id, dispatch]);

  const onFinishUserUpdate = async (values) => {
    try {
      const response = await api.put(`userUpdate/${id}`, values);
      if (response.data) {
        dispatch(setUser(response.data));
        await api.post('/logout');
        message.success('Kullanıcı Güncelleme İşlemi Başarılı');
        navigate('/login');
      }
    } catch (error) {
      message.error('Hatalı İşlem');
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto  flex items-center justify-around">
        <div className="leftRegister">
          <h1 className="text-3xl font-bold mb-5 text-center">
            Kullanıcıyı Güncelle
          </h1>
          <Form layout="vertical" form={form} onFinish={onFinishUserUpdate}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email Alanı Boş Geçilemez!",
                },
              ]}
              initialValue={userData?.userData?.user?.email}
            >
              <Input className="h-10 min-w-[300px]" placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Kullanıcı Adı Alanı Boş Geçilemez!",
                },
              ]}
              initialValue={userData?.userData?.user?.username}
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
              >
                Kullanıcıyı Güncelle
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="rightRegister">
          <img
            src={currentUser.avatar || "/noavatar.jpg"}
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
