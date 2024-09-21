import React, { useEffect, useState } from "react";
import SliderCard from "./SliderCard";
import axios from "axios";

function Slider() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((url) => {
        setProducts(url.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [products]);

  return (
    <div>
      <div className="flex sm:11/12 lg:w-10/12 border-2 p-3 shadow-2xl rounded-2xl mx-auto flex-nowrap overflow-x-scroll overflow-y-hidden gap-5 py-6">
        {products.map((data) => (
          <SliderCard
            key={data.id}
            title={data.title}
            image={data.thumbnail}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
