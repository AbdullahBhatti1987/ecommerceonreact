import { createContext, useEffect, useState } from "react";

export const AddtoCartContext = createContext();

function AddtoCartContextProvider({ children }) {
  const [addtoCart, setAddtoCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("addtoCart", JSON.stringify(addtoCart));
    }
  }, [addtoCart]);

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem("addtoCart");
    console.log("itemsFromStorage=>", itemsFromStorage);
    if (itemsFromStorage) {
      setAddtoCart([...JSON.parse(itemsFromStorage)]);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem("addtoCart");
    console.log("itemsFromStorage=>", itemsFromStorage);
    if (itemsFromStorage) {
      setAddtoCart([...JSON.parse(itemsFromStorage)]);
      setIsLoaded(true);
    }
  }, []);

  function addItemToCart(item) {
    const arr = addtoCart;

    const itemIndex = addtoCart.findIndex((data) => data.id == item.id);
    if (itemIndex == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setAddtoCart([...arr]);
  }

  function lessQuanityFromCart(id) {
    const arr = addtoCart;
    const itemIndex = addtoCart.findIndex((data) => data.id == id);
    arr[itemIndex].quantity--;
    setAddtoCart([...arr]);
  }

  function removeItemFromCart(id) {
    const arr = addtoCart;
    const itemIndex = addtoCart.findIndex((data) => data.id == id);
    arr.splice(itemIndex, 1);
    setAddtoCart([...arr]);
  }

  function isItemAdded(id) {
    const arr = addtoCart;
    const itemIndex = addtoCart.findIndex((data) => data.id == id);
    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  }

  return (
    <AddtoCartContext.Provider
      value={{
        addtoCart,
        setAddtoCart,
        addItemToCart,
        lessQuanityFromCart,
        removeItemFromCart,
        isItemAdded,
      }}
    >
      {children}
    </AddtoCartContext.Provider>
  );
}

export default AddtoCartContextProvider;
