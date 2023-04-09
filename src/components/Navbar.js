function Navbar() {
  return (
    <nav className="navbar has-shadow">
      <div className="container">
        <div className="navbar-brand ">
          <a className="navbar-item" href="../">
            <img
              className="is-size-6"
              src="https://bounceinsights.com/wp-content/uploads/2020/06/method-draw-image-1.svg"
              alt="Bulma: a modern CSS framework based on Flexbox"
            />
          </a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Account</a>
              <div className="navbar-dropdown">
                <hr className="navbar-divider" />
                <div className="navbar-item">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
