import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    const navigate = useNavigate()
    const handleNavigation = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>friend details:{friend.id}</h3>
            <h3>name:{friend.name}</h3>
            <p>phone:{friend.phone}</p>
            <button onClick={handleNavigation}>go back</button>
        </div>
    );
};

export default FriendDetails;