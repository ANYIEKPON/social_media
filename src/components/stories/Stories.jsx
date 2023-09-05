import React, { useContext } from 'react';
import "./stories.scss";
import friends from "../../assets/image3.jpg";
import fund from "../../assets/image3.jpg";
import gaming from "../../assets/image3.jpg";
import group from "../../assets/image3.jpg";
import memories from "../../assets/image3.jpg";
import videos from "../../assets/image3.jpg";
import { AuthContext } from '../../context/authContext';
import watch from "../../assets/image1.jpg";

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

    const stories = [
        {
            id: 1,
            name: "John Stone",
            img: friends
        },
        {
            id: 2,
            name: "Kante Kante",
            img: videos
        },
        {
            id: 3,
            name: "Drink Water",
            img: group
        },
        {
            id: 4,
            name: "King tu",
            img: gaming
        },
    ]

  return (
    <div className='stories'>
        <div className='story'>
                <img src={watch} alt={currentUser.name} />
                <span>{currentUser.name}</span>
                <button>+</button>
        </div>
        {stories.map((story) => (
            <div className='story' key={story.id}>
                <img src={story.img} alt={story.name} />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories