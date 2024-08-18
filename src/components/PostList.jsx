import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';


function PostList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
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