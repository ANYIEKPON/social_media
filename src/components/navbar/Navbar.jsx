import React, { useContext } from 'react';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { GrAppsRounded } from 'react-icons/gr';
import { CiSearch } from 'react-icons/ci';
import { BsPerson, BsSun } from 'react-icons/bs';
// import { FcBusinessContact } from 'react-icons/fc';
import { BiMoon, BiBell } from 'react-icons/bi';
import { DarkModeContext } from '../../context/darkModeContext';
import "./navbar.scss";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {

  const {darkMode, toggle} = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="leftSide">
        <Link to='/' style={{textDecoration: 'none'}}><span>socialChat</span></Link>
        <AiOutlineHome />
        {darkMode ? <BsSun onClick={toggle} /> : <BiMoon onClick={toggle} />}
        <GrAppsRounded />
        <div className="search">
          <CiSearch />
          <input type="text" placeholder='search...' />
        </div>
      </div>
      <div className="rightSide">
          <BsPerson />
          <AiOutlineMail />
          <BiBell />
          <div className="user">
              <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar