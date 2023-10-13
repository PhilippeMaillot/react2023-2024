import React, { createContext, useContext, useState } from "react";

// Créez le contexte ShopContext
const ShopContext = createContext();

// Créez le fournisseur de contexte ShopContextProvider
export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // Ajoutez d'autres données ou fonctions de contexte ici

  return (
    <ShopContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ShopContext.Provider>
  );
};

// Créez un hook personnalisé pour utiliser le contexte ShopContext
export const useShopContext = () => {
  return useContext(ShopContext);
};
