import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost';
import { useState, useEffect } from 'react';
import Modal from './Modal';


function PostList({isPosting, onStopPosting}) {
    //updating the state causes component function got executed again

     // we send get request  then unpack data from response
    
    //useEffect prevent the infinite loop of rendering 
    // the 2nd parameter [] is define the time when it executes
    // by use empty array it tells, this component executed only once at first
    useEffect(() => { 
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts)

        }
        fetchPosts();
        }, []);

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        // we send a request to that url and specifically targeting /posts
        // by default fetch send GET request but we want to use POST here
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body : JSON.stringify(postData),
            headers : { 
                'Content-Type' : 'application/json'
            }
        });
        

        // setPosts([postData, ...posts]);
        setPosts((existingPosts) => [postData, ...existingPosts]);
        //if the new state depend on old state use this function form above
        //for updating state. you get old state automatically, you can use it
        //and you should return the new state then as a value

    }

    //another approach to use the state  modalIsVisible after change

    // {modalIsVisible === true ? 
    //     <Modal onClose={hideModalHandler}>
    //         <NewPost 
    //             onBodyChange={changeBodyHandler} 
    //             onAuthorChange={changeAuthorHandler}
    //         />
    //     </Modal> : null}

    let modalContent;

    if (isPosting) {
        modalContent = 
        <Modal onClose={onStopPosting}>
            <NewPost 
                onCancel={onStopPosting}
                onAddPost={addPostHandler} 
            />
        </Modal>
    }


    return(
        //empty element or fragment <> to make it work with more content
        //we pass the props to NewPost
         <>  
        {modalContent}
        <ul className={styles.posts}>
            {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/> )}
        </ul>
        </>
    );
}

export default PostList