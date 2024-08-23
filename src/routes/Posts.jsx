import { useState } from 'react'
import PostList from '../components/PostList';
import { Outlet } from 'react-router-dom';

// Many JavaScript and React projects follow the Airbnb JavaScript Style Guide, 
// which prefers single quotes for strings, except to avoid escaping
function App() {



  return  (
    <>
    <Outlet/>
      <main>
        <PostList />
      </main>
    </>
   
  
  );
}

export default App

export async function loader(){
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}
