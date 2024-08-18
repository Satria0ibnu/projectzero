import styles from './Modal.module.css';

function Modal({children, onClose}) {
    //instead of props and later use props.children
    //we are destructuring the object that pass immediately

    //children is reserved word ( iam not make it)
    //refer to  the content if it wrapped something

    return (
        //div for background or backdrop
        //open is by default open={true}
        //open to make sure its visible
        <>
            <div className={styles.backdrop} onClick={onClose}/>
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        
        </>
    )
}

export default Modal;