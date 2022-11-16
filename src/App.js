import React, { useEffect } from "react";
import CartContainer from "./commponets/CartContainer";
import Navbar from "./commponets/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./feature/cart/CartSlice";
import Model from "./commponets/Model";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((state) => state.modelToggle);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems("example"));
  }, []);
  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Model />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
