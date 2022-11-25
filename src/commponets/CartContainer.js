import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { stateChange } from "../feature/cart/CartSlice";
import { modelOpen } from "../feature/model/modelSlice";
import { test } from "../feature/testSlice/slice";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";

const CartContainer = () => {
  const [local, setlocal] = useState(false);
  const dispatch = useDispatch();
  const { cartItems, total, amount, isRender } = useSelector(
    (store) => store.cart
  );
  useEffect(() => {
    console.log("@@@@ useEffect checkig rendering in cart container");
  }, []);

  // const { value } = useSelector((state) => state.testingPurpose);
  // console.log(value, "testing selector ");
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is current empty </h4>
        </header>
      </section>
    );
  }
  return (
    <div>
      {console.log("rerender")}
      {isRender && <h1>is render main state</h1>}
      <button onClick={() => dispatch(stateChange())}> isRender change </button>
      <button onClick={() => setlocal(!local)}>local state</button>
      {local && <h1>local state</h1>}
      <section className='cart'>
        <header>
          <button onClick={() => dispatch(test())}>test another slice </button>
          <h2>your bag here</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className='cart-total'>
            <h4>
              total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            className='btn clear-btn'
            onClick={() => dispatch(modelOpen())}>
            clear cart
          </button>
        </footer>
      </section>
    </div>
  );
};

export default CartContainer;
