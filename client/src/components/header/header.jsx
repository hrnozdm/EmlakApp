import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <header>
        <div className="container mx-auto flex justify-between">
          <div className="leftNavbar flex items-center gap-5 p-4 font-bold">
            <span onClick={()=>navigate('/')} className="cursor-pointer">
              <img src="/logo.png" alt="" width={40} height={40} />
            </span>
            <span className="cursor-pointer" onClick={()=>navigate('/')}>Anasayfa</span>
            <span>Hakkında</span>
            <span>İletişim</span>
            <span>Agents</span>
          </div>
          
          <div className="rightNavbar flex items-center gap-5">
            {
              currentUser ? (
                <>
                  <div className="flex items-center gap-2">
                    <img src={currentUser.avatar || '/noavatar.jpg'} alt="" className="rounded-full" width={40} height={40} />
                    <span>{currentUser.username}</span>
                  </div>
                   <div>
                   <Button style={{ backgroundColor: '#F4D03F', borderColor: 'yellow', color: 'black' }} size="large" onClick={() => navigate('/profile')}>Profile</Button>
                   </div>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="cursor-pointer" onClick={()=>navigate('/register')}>Kayıt Ol</div>
                  <Button style={{ backgroundColor: '#F4D03F', borderColor: 'yellow', color: 'black' }} size="large" onClick={() => navigate('/login')}>Giriş Yap</Button>
                </div>
              )
            }
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
