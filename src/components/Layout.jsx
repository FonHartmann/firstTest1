import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <NavLink to="/" className="headStyle">
          Home
        </NavLink>
        <NavLink to="/" className="headStyle">
          Blog
        </NavLink>
        <NavLink to="/login" className="headStyle">
          LogIn
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
