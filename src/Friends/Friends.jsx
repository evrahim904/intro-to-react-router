import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h3> these are my friends {data.length}</h3>
            {
                data.map(friend => <Friend
                key = {friend.id}
                friend = {friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;