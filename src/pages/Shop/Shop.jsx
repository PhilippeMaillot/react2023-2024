import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Shop.css";
import { useShopContext } from "../../components/ShopContext"; // Importez le hook useShopContext
import { Link } from "react-router-dom"; // Importez le composant Link

function SearchBar({ value, onChange }) {
  return (
    <div className="input-group mb-3 d-flex justify-content-center">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={value}
        onChange={onChange}
        style={{ maxWidth: "300px" }}
      />
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">
        Search
      </button>
    </div>
  );
}

function SearchButtons({ onClick }) {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-outline-secondary me-2" onClick={() => onClick("electronics")}>
        Electronics
      </button>
      <button className="btn btn-outline-secondary me-2" onClick={() => onClick("jewelery")}>
        Jewelery
      </button>
      <button className="btn btn-outline-secondary me-2" onClick={() => onClick("men's clothing")}>
        Men's Clothing
      </button>
      <button className="btn btn-outline-secondary" onClick={() => onClick("women's clothing")}>
        Women's Clothing
      </button>
    </div>
  );
}

function Cart({ items, removeFromCart, clearCart }) {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="position-fixed top-0 end-0 m-3" style={{ zIndex: "999" }}>
      <button className="btn btn-outline-secondary" onClick={toggleCart}>
        Cart ({totalItems})
      </button>
      {showCart && (
        <div className="position-fixed top-50 start-50 translate-middle p-3 bg-white shadow-lg rounded">
          <h5 className="mb-3">Cart ({totalItems})</h5>
          {items.length === 0 ? (
            <>
              <p>Your cart is empty.</p>
              <button className="btn btn-outline-secondary mt-3 ms-3" onClick={toggleCart}>
                Close Cart
              </button>
            </>
          ) : (
            <>
              <ul className="list-group mb-3">
                {items.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.title} x{item.quantity}
                    <span className="badge bg-secondary rounded-pill">{(item.price * item.quantity).toFixed(2)}€</span>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => removeFromCart(item)}>
                      X
                    </button>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <h6>Total:</h6>
                <h6>{totalPrice}€</h6>
              </div>
              <button className="btn btn-outline-secondary mt-3" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn btn-outline-secondary mt-3 ms-3" onClick={toggleCart}>
                Close Cart
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Renders a shopping page with a search bar, search buttons, a list of products, and a cart.
 * @returns {JSX.Element} The rendered shopping page.
 */
function Shop() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { cartItems, setCartItems } = useShopContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      });
  }, []);

  /**
   * Filters the list of products based on the search term.
   * @type {Array} The filtered list of products.
   */
  const filteredProducts = products.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || categoryMatch;
  });

  /**
   * Updates the search term state based on user input.
   * @param {string} keyword - The search term entered by the user.
   */
  const handleSearch = (keyword) => {
    setSearchTerm(keyword);
  };

  /**
     * Removes a product from the cart or decreases its quantity if it has more than one in the cart.
     * @param {Object} product - The product to remove from the cart.
     */
  const removeFromCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem.quantity === 1) {
        setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
        setCartItems(cartItems.map(item => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity - 1 };
            } else {
                return item;
            }
        }));
    }
  }

  /**
   * Adds a product to the cart or increases its quantity if it already exists in the cart.
   * @param {Object} product - The product to add to the cart.
   */
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Reste de votre composant Shop

  return (
    <div className="container mt-5">
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <SearchButtons onClick={handleSearch} />
      <Cart items={cartItems} removeFromCart={removeFromCart} clearCart={() => setCartItems([])} />
      <Link to="/cart">Checkout</Link> {/* Lien vers la page du panier */}
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description.length > 50 ? product.description.substring(0, 100) + "..." : product.description}</p>
                  <p className="card-text">{product.price}€</p>
                  <button className="btn btn-outline-secondary" onClick={() => addToCart(product)}>
                    Add to my cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
