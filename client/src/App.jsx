import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./pages/Home";
import ProfilPage from "./pages/ProfilPage";
import Register from "./components/register/Register";
import UpdateProfile from "./pages/UpdateProfile";
import CreatePosPage from "./pages/CreatePosPage";

export const AuthGuard = ({ children }) => {
  const isLogin = localStorage.getItem("user");
  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <AuthGuard>
                <ProfilPage />
              </AuthGuard>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile/update/:id"
            element={
              <AuthGuard>
                <UpdateProfile />
              </AuthGuard>
            }
          />

          <Route path="/profile/addPost" element={ <AuthGuard>
            <CreatePosPage></CreatePosPage>
          </AuthGuard>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
