import { useEffect, useState } from 'react';
import {  Link, Outlet, useLocation } from 'react-router-dom';


function User() {
  const [user, setUser] = useState({});
  const id=useLocation().pathname.split("/")[2];

  useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      setUser(data) 
    });
  
  }, [id])
  
  return (
    <div>
     <p>Name: {user.name}</p>
     <p>UserName: {user.username}</p>
     <p>Email : {user.email}</p>
     <Link to="/users/1">Fetch User 1</Link> 
     <Link to="/users/2">Fetch User 2</Link> 
     <Link to="/users/3">Fetch User 3</Link>
     <Outlet />
    </div>
  );
}

export default User