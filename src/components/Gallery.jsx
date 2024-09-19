import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";

function Gallery() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setApiData(data.products),)      
  }, []);
  console.log(apiData)
  return (
    <div className="flex flex-wrap justify-between w-11/12 sm:w-full m-auto">
      {apiData.map(({title,thumbnail,price, description, id } = data) => (
        <Card
          // key={id}
          image={thumbnail}
          // title={title}
          // price={price}
          // desc={description}
          className="card border border-gray-200 p-4 truncate"
          // style={{}}
        />
      ))}
    </div>
  );
}

export default Gallery;
