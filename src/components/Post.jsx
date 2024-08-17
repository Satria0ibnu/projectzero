function Post(props) {
    //props here is parameter with shape of an object
    //maybe if we call props
    //author : "somevalue",
    //body : "somevalue"
    //because we pass author and body as argument in App.jsx
    return (
        <div>
            <p>{props.author}</p>
            <p>{props.body}</p>
        </div>
    )

}

export default Post;