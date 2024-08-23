import styles from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal({children, }) {
    //instead of props and later use props.children
    //we are destructuring the object that pass immediately

    //children is reserved word ( iam not make it)
    //refer to  the content if it wrapped something

    const navigate = useNavigate();
    function closeHandler(){
        // navigate('/'); //here is not dynamic approach to go back
        navigate('..'); //take it as like command in cmd
    }

    return (
        //div for background or backdrop
        //open is by default open={true}
        //open to make sure its visible
        <>
            <div className={styles.backdrop} onClick={closeHandler}/>
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        
        </>
    )
}

export default Modal;