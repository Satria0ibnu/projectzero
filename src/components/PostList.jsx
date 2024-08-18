import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost';
import { useState } from 'react';


function PostList() {

    const [enteredBodyText, setEnteredBodyText] = useState();
    const [enteredAuthorText, setEnteredAuthorText] = useState();

    // useState() contain an array with 2 value;
    // the first one is value of the current state
    // the second one is function to update the state

    function changeBodyHandler(event) {
        setEnteredBodyText(event.target.value);

    }

    function changeAuthorHandler(event) {
        setEnteredAuthorText(event.target.value);

    }
    return(
        //empty element or fragment <> to make it work with more content
        //we pass the props to NewPost
         <>  
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
            <ul className={styles.posts}>
                <Post author={enteredAuthorText} body={enteredBodyText}/>
                <Post author="Ibnu Pamungkas" body="Why you cant react"/>
            </ul>
        </>
    );
}

export default PostList