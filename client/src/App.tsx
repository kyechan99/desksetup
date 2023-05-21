import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./styles/yuri-grid.css";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Singup from "./pages/Signup";
import FindAccount from "./pages/FindAccount";
import Write from "./pages/Write";
import Product from "./pages/Product";
import Error from "./pages/Error";
import Post from "./pages/Post";
import UserPage from "./pages/UserPage";
import Store from "./pages/Store";
import User from "./pages/User";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/findaccount" element={<FindAccount />} />
          <Route path="/write" element={<Write />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/user/:user_id" element={<User />} />
          <Route path="/product/:product_id" element={<Product />} />
          <Route path="/post/:post_id" element={<Post />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
