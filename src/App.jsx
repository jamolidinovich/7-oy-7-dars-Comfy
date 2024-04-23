import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chekcout from "./pages/Chekcout";
import Orders from "./pages/Orders";
import Layout from "./layout";
function App() {
  const navigate = useNavigate();
  function ProtectedRoute({
    children,
    isAuthentication,
    redirectTo = "/login",
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }
    return children;
  }
  return (
    <div>
      <Routes>
        {/* public route */}
        <Route
          path="/"
          element={
            <Layout>
              <Home></Home>
            </Layout>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Layout>
              <About></About>
            </Layout>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <Layout>
              <Products></Products>
            </Layout>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart></Cart>{" "}
            </Layout>
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <Layout>
              <Details></Details>
            </Layout>
          }
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* protected route      */}
        <Route
          path="chekcoute"
          element={
            <ProtectedRoute isAuthentication={false}>
              <Layout>
                <Chekcout></Chekcout>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="orders"
          element={
            <ProtectedRoute isAuthentication={false}>
              <Layout>
                <Orders></Orders>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
