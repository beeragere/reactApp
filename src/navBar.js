const Navbar = ({blog, removeBlog}) => {
   return(
      <div className="navBar">
         <nav className="menu">
            <div className="click">ClickMe</div>
            <a href="*" className="links">Home</a>
            <a href="*" className="links">Content</a>
         </nav>
         <div className="blogs">
            {blog.map((b) => {
               return(
                  <div className="blogList" key={b.id}>
                     <h1>{b.name}</h1>
                     <p>{b.desc}</p>
                     <div className="button" onClick={() => {removeBlog(b.id)}}>Remove</div>
                  </div>
               )
            })}
         </div>
      </div>
   ) 
}


export default Navbar;