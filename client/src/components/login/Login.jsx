import React,{useState} from "react";
import Header from "../header/header";
import { Form, Input,Button,message} from "antd";
import api from "../../api/api";
import {useNavigate} from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
    const [form] = Form.useForm();
    const [loading,setLoading] =useState(false);
    const onFinishLogin=async (values)=>{
         try {
            setLoading(true);
            const response=await api.post('/login',values);
            const user=response?.data?.user;
            console.log(user);
            localStorage.setItem('user',JSON.stringify({id:user._id,username:user.username,email:user.email,avatar:user.avatar}));
            setTimeout(() => {
                setLoading(false);
                navigate('/');
            }, 1000);
            
            form.resetFields();
         } catch (error) {
            if (error.response.status===401){
                message.error('Kullanıcı Adı veya Şifre Hatalı');
                setLoading(false);
            }
         }
         
    }
  return (
    <div>
      <Header />

      <div className="container mx-auto my-auto flex items-center justify-around">
        <div className="leftLogin ">
            <h1 className="text-3xl font-bold mb-5 text-center">Giriş Yap</h1>
          <Form layout="vertical" onFinish={onFinishLogin} form={form}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Kullanıcı Adı Alanı Boş Geçilemez!",
                },
              ]}
            >
              <Input className="h-10 min-w-[300px]" placeholder="Kullanıcı Adı"></Input>
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
              <Input.Password className="h-10 min-w-[300px]" placeholder="Şifre"/>
            </Form.Item>

            <Form.Item className="flex justify-center">
            <Button size="large" style={{ backgroundColor: '#138D75 ', borderColor: '#138D75',color:'white'}} htmlType="submit" loading={loading}>
              Giriş Yap
            </Button>
           </Form.Item>
          </Form>
        </div>
        <div className="rightLogin">
            <img src="bg.png" alt="" width={600} height={800}/>
        </div>
      </div>
    </div>
  );
};

export default Login;
