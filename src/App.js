import './style.scss';
import Home from "./pages/home/Home"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Left from './components/left/Left';
import Right from './components/right/Right';
import Profile from './pages/profile/Profile';
import Navbar from "./components/navbar/Navbar";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {

 

  const {darkMode} = useContext(DarkModeContext);
  
  const { currentUser } = useContext(AuthContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`} >
          <Navbar />
          <div style={{display:"flex"}}>
            <Left />
            <div style={{flex: 6}}>
              <Outlet />
            </div>
            <Right />
          </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
      if(!currentUser) {
        return <Navigate to='/login' />
      }

      return children;
  }

  return (
    <div className="App">
      <Router>
          <Routes>
            
              <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                <Route path='/' element={<Home />} />
                <Route path='profile/:id' element={<Profile />} />
              </Route>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
