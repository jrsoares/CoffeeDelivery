import { createContext, useState } from "react";
export interface CartItem extends Coffee {
  quantity: number;
}
interface CartContextType {
  cartItems: CartItem[];
}
export const CartContext = createContext({} as CartContextType);
export function CartContextProvider() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return <CartContext.Provider value={{ cartItems }}></CartContext.Provider>;
}
