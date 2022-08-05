import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <header className="header">
          <nav className="topNav">
            <NavLink to="/" className="headStyle">
              Home
            </NavLink>
            <NavLink to="/posts" className="headStyle">
              Blog
            </NavLink>
            <NavLink to="/login" className="headStyle">
              LogIn
            </NavLink>
          </nav>
        </header>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { Layout };
