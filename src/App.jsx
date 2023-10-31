// A user can view a selection of items in the store
// From the store, a user can add an item to their cart
// From the cart, a user can view and adjust the number of items in their cart
// If an item's quantity equals zero it is removed from the cart
// A user can view the current total in their cart

// Create all the components you need, using the templates as a reference
// Create all the pieces of the state you need, using the example provided
// Add all the event listeners you need to make the page reactive

import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";
import { useState } from "react";

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

console.log(initialStoreItems);

export default function App() {
  // 1. Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState();

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Write some code here... */}
          {/* 2.  Copied the template store-item here */}
          {/* 3. Map through all the items (Render) */}
          {storeItems.map((storeItems) => {
            return (
              <li key={storeItems.id}>
                <div className="store--item-icon">
                  {/* 4.Render the image */}
                  <img
                    src={`assets/icons/${storeItems.id}.svg`}
                    alt="beetroot"
                  />
                </div>
                {/* 5. Add an onClick here so when the "Add to cart" button is clicked the cart items will increase in quantity */}
                <button>Add to cart</button>
              </li>
            );
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Write some code here... */}
            {/* 6. Copied the template cart-items here */}
            {/* 7. Map through all the cart-items ??*/}
            <li>
              <img
                className="cart--item-icon"
                src="assets/icons/001-beetroot.svg"
                alt="beetroot"
              />
              <p>beetroot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">1</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            {/* Li for cart-items end here */}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
}
