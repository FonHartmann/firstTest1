import { Link } from "react-router-dom";

const NotFoundpage = () => {
  return (
    <div className="App-header">
      This page doesn't exist. Go
      <Link to="/"> home </Link>
    </div>
  );
};
export { NotFoundpage };
