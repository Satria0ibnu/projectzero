import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost';

function PostList() {
    return(
        //empty element or fragment <> to make it work with more content
         <>  
            <NewPost/>
            <ul className={styles.posts}>
                <Post author="Satria" body="Nice React-ion"/>
                <Post author="Ibnu Pamungkas" body="Why you cant react"/>
            </ul>
        </>
    );
}

export default PostList