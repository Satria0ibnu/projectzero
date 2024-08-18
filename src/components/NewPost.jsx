import { useState } from 'react';
// react has many built in function start with use.
// that is considered react hooks (we can build our own react hooks btw)
import styles from './NewPost.module.css'

function NewPost() {
    const [enteredBodyText, setEnteredBodyText] = useState();
    // useState() contain an array with 2 value;
    // the first one is value of the current state
    // the second one is function to update the state

    function changeBodyHandler(event) {
        setEnteredBodyText(event.target.value);

    }

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
        
      </p>
      <p>{enteredBodyText}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p> 
    </form>
  );
}

export default NewPost;