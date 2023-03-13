import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(products.length);

  const increaseCounter = (id) => {
    // const existingItem = products.find((item) => item.id === id);
    // console.log(existingItem);
    const result = products.filter((product) => {
      setCounter((prev) => prev + 1);

      // if (product.id !== id) {
      //   setProducts(result);
      //   return product; 
      // }
    });
    setProducts(result);
  };
  return (
    <ShopContext.Provider
      value={{
        products,
        increaseCounter,
        counter,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
