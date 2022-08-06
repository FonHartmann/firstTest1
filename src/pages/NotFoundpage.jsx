import { NavLink } from "react-router-dom";

const NotFoundpage = () => {
  return (
    <div className="App-header">
      This page doesn't exist. Go
      <NavLink to="/"> home </NavLink>
    </div>
  );
};
export { NotFoundpage };
