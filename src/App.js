import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './navBar';
function App() {
    let idNumber = 4;
   let [blog, setBlog] = useState(null);
   let [load, setLoad] = useState(true);
   let [error, setError] = useState(null);
   //for fetching data from the server!!
   useEffect(() => {
      setTimeout(() => {
         fetch("http://localhost:8000/data")
         .then(res => {
            if(res.ok){
               setError(null);
               return res.json();
            }
            else{
               throw Error("couldn't fetch the data from the server"); 
            }
         })
         .then(data => {
            setBlog(data)
            setLoad(false);
         })
         .catch(err => {
            console.log(err.message);
            setLoad(false);
            setError(err.message);
         })
      }, 2000);
   }, []);
   //for removing a blog from Navbar component
   let removeBlog = function(id){
      let newBlog = blog.filter((blog) => {
          return (blog.id !== id);
      });
      setBlog(newBlog); 
   }

   //for adding new blog to the Navbar component
   let addBlog = function(Name, Desc){
      let newBlog = blog.push({name: Name, desc: Desc, id:idNumber});
      idNumber++;
      setBlog(newBlog);
   }
  return (
    <div className="app">
      <h1>welcome</h1>
      {load && <p className="loading">loading.....</p>} 
      {blog && <Navbar blog={blog} removeBlog={removeBlog} addBlog={addBlog}/>} 
      {<p>{error}</p>} 
    </div>
  );
}

export default App;
