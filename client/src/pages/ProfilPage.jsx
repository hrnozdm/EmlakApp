import React from "react";
import Header from "../components/header/header";
import { Button } from "antd";
import api from "../api/api";
import {useNavigate} from "react-router-dom";

const ProfilPage = () => {
    const currentUser=JSON.parse(localStorage.getItem('user'));
    const navigate=useNavigate();
    const LogOut=async ()=>{
      try {
        await api.post('/logout');
        localStorage.removeItem('user');
        navigate('/');
      } catch (error) {
        console.log(error);
      }
     
    }
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="profileLeft">
          <div className="flex items-center gap-20">
            <h1>User Info</h1>
            <Button
              style={{
                backgroundColor: "#F4D03F ",
                borderColor: "yellow",
                color: "black",
              }}
              size="large"
            >
              Profile Güncelle
            </Button>
          </div>

          <div className="my-8">
            <p className="flex items-center gap-4 my-3">Profile Resmi <img src="noavatar.jpg" alt="" width={40} height={40} className="rounded-full"/></p>
            <p className="my-3">Username <span className="mx-5">{currentUser.username}</span></p>
            <p className="my-3">Email <span className="mx-5">{currentUser.email}</span></p>
            <Button size="large" style={{ backgroundColor: '#138D75 ', borderColor: '#138D75',color:'white'}} onClick={LogOut}>
              Çıkış Yap
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
