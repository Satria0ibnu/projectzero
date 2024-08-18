// react has many built in function start with use.
// that is considered react hooks (we can build our own react hooks btw)
import { useState } from 'react'
import styles from './NewPost.module.css'

function NewPost({onCancel, onAddPost}) {
    // useState() contain an array with 2 value;
    // the first one is value of the current state
    // the second one is function to update the state

    //props.onBodyChange is declared in PostList.jsx
    //we can name up that onBodyChange

    const [enteredBodyText, setEnteredBodyText] = useState('');
    const [enteredAuthorText, setEnteredAuthorText] = useState('');


    // useState() contain an array with 2 value;
    // the first one is value of the current state
    // the second one is function to update the state

    
    function changeBodyHandler(event) {
        setEnteredBodyText(event.target.value);

    }

    function changeAuthorHandler(event) {
        setEnteredAuthorText(event.target.value);

    }

    function submitHandler(event) {
      // cause this is react course and we dont have any server side code
      // we dont want the request from form its send by http request
      event.preventDefault();
      const postData = {
        author : enteredAuthorText,
        body : enteredBodyText
      };
      onAddPost(postData);
      onCancel();

    }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
        
        
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler}/>
      </p>
      <p className={styles.actions}> 
        <button type="button"onClick={onCancel}>Cancel</button>
        <button>submit</button>
      </p>

    </form>
  );
  //by default button will be set to type submit
}

export default NewPost;