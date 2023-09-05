import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';
import "./login.scss"

const Login = () => {

  const { login } = useContext(AuthContext); 
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate("/");
  }


  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Hello Chat..</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. In quos ipsam 
                  dolore cum alias quae!
                </p>
                <span>Don't you have an account</span>
                <Link to="/register"><button>Register</button></Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                  <input type="text" placeholder='Username' />
                  <input type="password" placeholder='Password'/>
                  <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login