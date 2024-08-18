// react has many built in function start with use.
// that is considered react hooks (we can build our own react hooks btw)
import styles from './NewPost.module.css'

function NewPost(props) {
    // useState() contain an array with 2 value;
    // the first one is value of the current state
    // the second one is function to update the state

    //props.onBodyChange is declared in PostList.jsx
    //we can name up that onBodyChange

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
        
        
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p> 
    </form>
  );
}

export default NewPost;