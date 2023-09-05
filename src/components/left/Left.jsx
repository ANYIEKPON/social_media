import React, { useContext } from 'react'
import courses from "../../assets/courses.png";
import friends from "../../assets/friends.png";
import events from "../../assets/events.png";
import fund from "../../assets/fund.png";
import gallery from "../../assets/gallery.png";
import gaming from "../../assets/gaming.png";
import group from "../../assets/group.png";
import memories from "../../assets/memories.png";
import message from "../../assets/message.png";
import store from "../../assets/store.png";
import tutorial from "../../assets/tutorial.png";
import videos from "../../assets/videos.png";
import watch from "../../assets/watch.png";
import image from "../../assets/image1.jpg"
import "./left.scss"
import { AuthContext } from '../../context/authContext';


const Left = () => {

    const { currentUser } = useContext(AuthContext);

  return (
    <div className='left'>
      <div className="container">
        <div className="menu">
          <div className="user">
              <div><img src={image} alt="" /></div>
              <div>{currentUser.name}</div>
          </div>
          <div className="item">
              <img src={friends} alt="friends" />
              <div>Friends</div>
          </div>
          <div className="item">
              <img src={group} alt="friends" />
              <div>Groups</div>
          </div>
          <div className="item">
              <img src={store} alt="friends" />
              <div>Marketplace</div>
          </div>
          <div className="item">
              <img src={watch} alt="friends" />
              <div>Watch</div>
          </div>
          <div className="item">
              <img src={memories} alt="friends" />
              <div>Memories</div>
          </div>
          <hr />
          <div className="menu">
              <div>Your Shortcuts</div>
              <div className="item">
                <img src={events} alt="friends" />
                <div>Events</div>
              </div>
              <div className="item">
                  <img src={gaming} alt="friends" />
                  <div>Gaming</div>
              </div>
              <div className="item">
                  <img src={gallery} alt="friends" />
                  <div>Gallery</div>
              </div>
              <div className="item">
                  <img src={videos} alt="friends" />
                  <div>Video</div>
              </div>
              <div className="item">
                  <img src={message} alt="friends" />
                  <div>Messages</div>
              </div>
          </div>
          <hr />
          <div className="menu">
              <div>Others</div>
              <div className="item">
                  <img src={fund} alt="friends" />
                  <div>Fundraisers</div>
              </div>
              <div className="item">
                  <img src={tutorial} alt="friends" />
                  <div>Tutorials</div>
              </div>
              <div className="item">
                  <img src={courses} alt="friends" />
                  <div>Courses</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Left