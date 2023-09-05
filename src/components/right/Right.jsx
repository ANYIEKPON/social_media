import React from 'react';
import image from "../../assets/image1.jpg"
import "./right.scss"

const Right = () => {
  return (
    <div className='right'>
        <div className="container">
          <div className="item">
              <span>Suggestions For You</span>
              <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <span>Shawn Doe</span>
                    </div>
                    <div className="buttons">
                      <button>follow</button>
                      <button>dismiss</button>
                    </div>
              </div>
              <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <span>Shawn Doe</span>
                    </div>
                    <div className="buttons">
                      <button>follow</button>
                      <button>dismiss</button>
                    </div>
              </div>
          </div>
          <div className="item">
            <span>Latest Activities</span>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <p>
                        <span>Shawn Doe</span> changed their cover picture
                      </p>
                    </div>
                   <span>1 min ago</span>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <p>
                        <span>Shawn Doe</span>
                      </p>
                    </div>
                   <span>1 min ago</span>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <p>
                        <span>Shawn Doe</span>
                      </p>
                    </div>
                   <span>1 min ago</span>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <p>
                        <span>Shawn Doe</span>
                      </p>
                    </div>
                   <span>1 min ago</span>
            </div>
          </div>
          <div className="item">
            <span>Online Friends</span>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
            <div className="user">
                    <div className="userInfo">
                      <img src={image} alt="" />
                      <div className='online' />
                        <span>Shawn Doe</span>
                    </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Right