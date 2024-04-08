import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './pages/Home';
import ProfilPage from './pages/ProfilPage';
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={< Home/>} />
        <Route path="/profile" element={< ProfilPage/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
