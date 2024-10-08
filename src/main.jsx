import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App, { loader as postLoader} from './routes/Posts.jsx'
import './index.css'
import NewPost, { action as newPostAction} from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails.jsx'


//createBrowserRouter takes array as an argument (similar like children value)
//which contain objects
//each object represent a route. with path and element as a key

//the path of the parent and child routes are also combined and must not clash
// ex: parent routes not /something whhen child routes has /create-post

//in here we create the one route with many child 
// and it act as an root layout for all child layout

//react router higher version give us more convinient way to fetch data
//by using loader key
//because we dont want to mess the main js. the function is in the component

//we can add action by adding action key
//the function of action value will be triggered when
//the form is submitted in that form
const router = createBrowserRouter([
  { path : '/', 
    element : <RootLayout/>, 
    children : [
      { path : '/', 
        element : <App/>, 
        loader : postLoader,
        children : [
          { path : '/create-post', 
            element : <NewPost/>,
            action  : newPostAction 
          },
          { path : '/:postId',
            element : <PostDetails/>,
            loader : postDetailsLoader
          }]}
      
  ]}
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
