import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';
import { BiLogoPinterest} from 'react-icons/bi';
import { ImLocation2} from 'react-icons/im';
import { SiWebmoney} from 'react-icons/si';
import { IoMdMore} from 'react-icons/io';
import { RiMailSendLine} from 'react-icons/ri';
import friends from "../../../src/assets/image3.jpg";
import Ozone from "../../../src/assets/image1.jpg";
import Posts from "../../components/posts/Posts"

import "./profile.scss";

const Profile = () => {

  return (
    <div className='profiless'>
      <div className="imagess">
        <img src={friends} alt="" className='cover' />
        <img src={Ozone} alt="" className='profilePic'/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="leftPrifile">
              <a href="http://facebook.com">
                <BsFacebook fontSize="small" />
              </a>
              <a href="http://facebook.com">
                <BsInstagram fontSize="small"  />
              </a>
              <a href="http://facebook.com">
                <AiOutlineTwitter fontSize="small"  />
              </a>
              <a href="http://facebook.com">
                <AiOutlineLinkedin fontSize="small"  />
              </a>
              <a href="http://facebook.com">
                <BiLogoPinterest fontSize="small"  />
              </a>
          </div>
          <div className="Center">
            <span>Jane Doe</span>
            <div className="inifo">
              <div className="item">
                <ImLocation2 fontSize="small" />
                <span>USA</span>
              </div>
              <div className="item">
                <SiWebmoney fontSize="small" />
                <span>king.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="write">
            <RiMailSendLine />
            <IoMdMore />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile