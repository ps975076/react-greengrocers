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

export default function App() {
  // 1. Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState([]);

  // 5. Add to cart button - function
  const addToCartHandler = (item) => {
    const items = [...cartItems];
    let exists = false;

    // Find an item with same id in cartItems
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        exists = true;
      }
    }

    if (exists) {
      item.qty++;
      // if you find one, increment the qty
    } else {
      // else set a new qty propty to 1
      item.qty = 1;
      items.push(item);
    }

    setCartItems(items);
  };

  //Create a minus button event
  const decreaseQty = (minusItem) => {
    const decreaseItems = [...cartItems];
    let updatedItems = [];

    if (minusItem.qty > 1) {
      updatedItems = decreaseItems.map((item) => {
        if (minusItem.id === item.id) {
          item.qty--;
        }
        // always return when using map
        return item;
      });
    } else {
      updatedItems = decreaseItems.filter((item) => item.id !== minusItem.id);
    }

    console.log(updatedItems);
    setCartItems(updatedItems);
  };

  const increaseQty = (addItem) => {
    const increaseItems = [...cartItems];
    const updatedItems = increaseItems.map((item) => {
      if (addItem.id === item.id) {
        item.qty++;
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Write some code here... */}
          {/* 2.  Copied the template store-item here */}
          {/* 3. Map through all the items (Render) */}
          {storeItems.map((singleItem) => (
            <li key={singleItem.id}>
              <div className="store--item-icon">
                {/* 4.Render the image */}
                <img src={`assets/icons/${singleItem.id}.svg`} alt="beetroot" />
              </div>
              {/* 5. Add an onClick here so when the "Add to cart" button is clicked the cart items will increase in quantity. Create a function at the top, use the variable name here, assign to "onClick" */}
              <button onClick={() => addToCartHandler(singleItem)}>
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Write some code here... */}
            {/* 6. Copied the template cart-items here */}
            {/* 7. Map through all the cart-items ??*/}
            {cartItems.map((item) => (
              <li key={item.id}>
                <img
                  className="cart--item-icon"
                  src={`assets/icons/${item.id}.svg`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <button
                  onClick={() => decreaseQty(item)}
                  className="quantity-btn remove-btn center"
                >
                  -
                </button>
                <span className="quantity-text center">{item.qty}</span>
                <button
                  onClick={() => increaseQty(item)}
                  className="quantity-btn add-btn center"
                >
                  +
                </button>
              </li>
            ))}

            {/* Li for cart-items end here */}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">
              £
              {cartItems
                .reduce((acc, item) => acc + item.price * item.qty, 0)
                .toFixed(2)}
            </span>
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
