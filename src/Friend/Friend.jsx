import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id, phone, email } = friend;
    const navigate = useNavigate()
    const handNavigation =()=>{
        navigate(`/friend/${id}`)
    }
    return (
        <div className='friend'>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
           <Link to={`/friend/${id}`}>show me details</Link>
           <Link to={`/friend/${id}`}><button> show post details</button></Link>
           <button onClick={handNavigation}>with button handler</button>
        </div>
    );
};

export default Friend;