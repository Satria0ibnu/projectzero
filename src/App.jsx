import { useState } from 'react'
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';


// Many JavaScript and React projects follow the Airbnb JavaScript Style Guide, 
// which prefers single quotes for strings, except to avoid escaping
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(){
    setModalIsVisible(false);
  }

  function showModalHandler(){
    setModalIsVisible(true);
  }



  return  (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
   
  
  );
}

export default App
