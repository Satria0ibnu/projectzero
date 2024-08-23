// react has many built in function start with use.
// that is considered react hooks (we can build our own react hooks btw)
import styles from './NewPost.module.css'
import Modal from '../components/Modal'
import { Link, Form, redirect} from 'react-router-dom';

function NewPost() {
    // useState() contain an array with 2 value;
    // the first one is value of the current state
    // the second one is function to update the state

    //props.onBodyChange is declared in PostList.jsx
    //we can name up that onBodyChange


    // useState() contain an array with 2 value;
    // the first one is value of the current state
    // the second one is function to update the state


      // cause this is react course and we dont have any server side code
      // we dont want the request from form its send by http request


  // because we are now using react router. we can have cleaner code
  // add name attribute to the field
  // import Form from react router dom
  // by changing form to Form. react router handle the form submission
  // and it will prevent browser by default from sending a request
  // but still gather the input data
  return (
    <>
    <Modal>    
      <Form method="post"className={styles.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
          
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={styles.actions}> 
          <Link to=".." type="button" >Cancel</Link>
          <button>submit</button>
        </p>

      </Form>
    </Modal>
    </>
    );
  //by default button will be set to type submit
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: '..', author : '..'  }
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body : JSON.stringify(postData),
    headers : { 
        'Content-Type' : 'application/json'
    }
  });

  // redirect to make react router load a different route which is '/'
  return redirect('/');
}