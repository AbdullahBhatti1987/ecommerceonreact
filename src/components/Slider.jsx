import React, { useEffect, useState } from "react";
import SliderCard from "./SliderCard";
import axios from "axios";

function Slider() {
    const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((url) => {setProducts(url.data.products)})
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="flex w-10/12 mx-auto flex-nowrap overflow-x-scroll overflow-y-hidden gap-5 py-6 ">
        {products.map((data)=>(
            <SliderCard key={data.id} title={data.title} image={data.thumbnail}/>

        ))}
      </div>
    </div>
  );
}

export default Slider;
