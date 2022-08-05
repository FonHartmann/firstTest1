import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home/Homepage";
import { Login } from "./pages/login/LogIn";
import { Blogpage } from "./pages/blog/Blogpage";
//import {Singlepage} from "./pages/blog/Blogpage"
//import {Editpost} from "./pages/blog/Blogpage"
//import {Createpost} from "./pages/blog/Blogpage"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Blogpage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
