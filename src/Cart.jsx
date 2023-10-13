import React from "react";
import { useShopContext } from "./ShopContext";

function Cart() {
  // Utilisez le hook useShopContext pour accéder au contexte
  const { cartItems } = useShopContext();

  return (
    <div className="container mt-5">
      <h1 className="fixed-top text-center w-100 bg-white" style={{ marginTop: "70px" }}>
        Résumé du panier
      </h1>
      <div className="pt-5">
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
