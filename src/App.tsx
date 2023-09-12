import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Private from "./layout/Private";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Private roles={["BUYER", "VENDOR" , "ADMIN"]}/>}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ProductPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
