import Post from './Post'
import styles from './PostList.module.css'
import { useLoaderData } from 'react-router-dom';


function PostList({}) {
    //useLoaderData() is to get the return result of the function in loader value
    const posts = useLoaderData();
    //updating the state causes component function got executed again

     // we send get request  then unpack data from response
    
    //useEffect prevent the infinite loop of rendering 
    // the 2nd parameter [] is define the time when it executes
    // by use empty array it tells, this component executed only once at first

        // we send a request to that url and specifically targeting /posts
        // by default fetch send GET request but we want to use POST here
        
        

        // setPosts([postData, ...posts]);
        
        //if the new state depend on old state use this function form above
        //for updating state. you get old state automatically, you can use it
        //and you should return the new state then as a value


    //another approach to use the state  modalIsVisible after change

    // {modalIsVisible === true ? 
    //     <Modal onClose={hideModalHandler}>
    //         <NewPost 
    //             onBodyChange={changeBodyHandler} 
    //             onAuthorChange={changeAuthorHandler}
    //         />
    //     </Modal> : null}



    return(
        //empty element or fragment <> to make it work with more content
        //we pass the props to NewPost
         <>  
        {posts.length > 0 ? 
            <ul className={styles.posts}>
                {posts.map((post) => 
                    <Post key={post.body} 
                    author={post.author} 
                    body={post.body}/> )}
            </ul>
        : null}
        
        
        {posts.length === 0 ? 
            <div style={{textAlign: 'center', color: 'white' }}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        : null}

        </>
    );
}

export default PostList