import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home/Homepage";
import { Login } from "./pages/login/LogIn";
import { Blogpage } from "./pages/blog/Blogpage";
import { Singlepage } from "./pages/blog/Singlepage";
import { NotFoundpage } from "./pages/NotFoundpage";
import { Editpost } from "./pages/blog/Editpost";
import { Createpost } from "./pages/blog/Createpost";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Blogpage />} />
          <Route path="/posts/:id" element={<Singlepage />} />
          <Route path="/posts/new" element={<Createpost />} />
          <Route path="/posts/:id/edit" element={<Editpost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </>
  );
}
