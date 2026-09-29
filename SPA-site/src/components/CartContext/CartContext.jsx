import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const savedCart = localStorage.getItem("cartItems");
  const getCart = savedCart ? JSON.parse(savedCart) : [];

  const [cartItems, setCartItems] = useState(getCart);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (course) => {
    const findItems = cartItems.find((item) => item.id === course.id);
    if (!findItems) {
      return setCartItems((prev) => [...prev, course]);
    }
  };
  const removeItem = (courseId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== courseId));
  };
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
