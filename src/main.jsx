import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './routes/Posts.jsx'
import './index.css'
import NewPost from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'


//createBrowserRouter takes array as an argument (similar like children value)
//which contain objects
//each object represent a route. with path and element as a key

//the path of the parent and child routes are also combined and must not clash
// ex: parent routes not /something whhen child routes has /create-post

//in here we create the one route with many child 
// and it act as an root layout for all child layout
const router = createBrowserRouter([
  { path : '/', 
    element : <RootLayout/>, 
    children : [
      { path : '/', 
        element : <App/>, 
        children : [{ path : '/create-post', element : <NewPost/>}]},
      
  ]}
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
