import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import NoPage from "./NoPage";
import Quiz from "./Quiz";
import Shop from "./Shop";
import SignIn from "./SignIn";
import { ShopContextProvider } from "./ShopContext"; // Importez le fournisseur de contexte ShopContextProvider
import "./App.css";
import Cart from "./Cart"; // Importez le composant Cart 
import Counter from "./Counter";
import Text from "./Input";
import SignUpForm from "./Signup";

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
