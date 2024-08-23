import styles from './Post.module.css'
import { Link } from 'react-router-dom';
//styles here is parameter with shape of an object
// post : '..',
// author : '..'

function Post(props) {
    //props here is parameter with shape of an object
    //maybe if we call props
    //author : "somevalue",
    //body : "somevalue"
    //because we pass author and body as argument in App.jsx

    // ex inline css:  <div style={{ color: 'red', textAlign: 'left' }}>
 
    
    return (
        <div className={styles.post}>
            <Link to={props.id}>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.text}>{props.body}</p>
            </Link>
        </div>
    )

}

export default Post;