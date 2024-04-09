import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './pages/Home';
import ProfilPage from './pages/ProfilPage';
import Register from "./components/register/Register";
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={< Home/>} />
        <Route path="/profile" element={< ProfilPage/>} />
        <Route path="/register" element={< Register/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
