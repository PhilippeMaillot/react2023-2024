import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./components/ShopContext";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import Quiz from "./pages/Quiz/Quiz";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/SignIn-SignUp/SignIn";
import SignUpForm from "./pages/SignIn-SignUp/SignUp";
import Cart from "./pages/Cart/Cart"; 
import Counter from "./pages/Counter/Counter";
import Text from "./pages/Input/Input";
import "./App.css";


function App() {
  return (
    <>
      <div className="app">
        {/* Enveloppez votre application avec ShopContextProvider */}
        <ShopContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="counter" element={<Counter />} />
                <Route path="input" element={<Text />} />
                <Route path="quiz" element={<Quiz />} />
                <Route path="shop" element={<Shop />} />
                <Route path="cart" element={<Cart />} /> {/* Ajoutez la route pour Cart */}
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUpForm />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
          </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
