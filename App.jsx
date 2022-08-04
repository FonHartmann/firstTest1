import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home/Homepage";
import { Login } from "./pages/login/LogIn";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
