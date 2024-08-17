import { useState } from 'react'
import Post from './components/Post'


// Many JavaScript and React projects follow the Airbnb JavaScript Style Guide, 
// which prefers single quotes for strings, except to avoid escaping
function App() {
  

  return  (
    <main>
      <Post author="Satria" body="Nice React-ion"/>
      <Post author="Ibnu Pamungkas" body="Why you cant react"/>



    </main>
  
  );
}

export default App
