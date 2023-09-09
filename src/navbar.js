const Navbar = () => {
    return (
      <div className="navbar">
          <h1>Items to Get</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create" className="link">New Item</a>
        </div>
      </div>
    );
}
 
export default Navbar;