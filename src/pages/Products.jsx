import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import Chip from "../components/Chip";
import { Pagination, Slider } from "antd";
import { useParams } from "react-router";
import { SearchContext } from "../context/SearchContext";
import { AddtoCartContext } from "../context/AddtoCart";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [choosenCategory, setChoosenCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15000);
  const { id } = useParams();
  const { search, setSearch } = useContext(SearchContext);
  // const { sortby } = useParams();
  const {
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
    isItemAdded,
  } = useContext(AddtoCartContext);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const onChange = (value) => {
    // console.log("onChange: ", value);
    setMinPrice(value);

  };
  const onChangeComplete = (value) => {
    // console.log("onChangeComplete: ", value);
    setMaxPrice(value);
  };


  const handleCategoryClick = (category) => {
    setSearch("");
    setChoosenCategory(category);
    console.log(category);
  }
  

  useEffect(() => {

    const categoryUrl = choosenCategory === "All"

    ? "https://dummyjson.com/products"
    : `https://dummyjson.com/products/category/${choosenCategory}`

    axios
      .get(categoryUrl)
      .then((url) => {
        // setProducts(url.data.products);
        setProducts(url.data.products.map((data)=>{data.price >= minPrice && data.price <= maxPrice}));
        console.log(products)
        setTotal(url.data.total);
      })
      .catch((error) => console.log(error));
  }, [choosenCategory]);

    // ? `https://dummyjson.com/products/search?q=${search}`
    // ? "https://dummyjson.com/products?sortBy=title&order=asc"
    //  :   "https://dummyjson.com/products?sortBy=title&order=desc";
  //   "https://dummyjson.com/products?sortBy=price&order=asc"
  //   : "https://dummyjson.com/products?sortBy=price&order=desc";



  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((url) => {
        setCategories(url.data);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
      <div className="w-10/12 mx-auto flex gap-2 pt-6 flex-wrap justify-left">
        <Chip id="All" title="All" onClick={() => handleCategoryClick("All")} />
        {categories.map((data) => (
          <Chip
            key={data.slug}
            title={data.name}
            onClick={() => handleCategoryClick(data.name)}
          />
        ))}
      </div>
      <div className="block pt-6">
        <div className="flex justify-between w-10/12 mx-auto">
          <div className="">
            <p>Price</p>
            <Slider
              className="w-48"
              range
              min={0}
              max={40000}
              step={100}
              defaultValue={[150, 25000]}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
            <p className="text-black flex gap-3 justify-center text-center">Rs:<span>{minPrice ?minPrice[0] : 150}</span>to<span>{minPrice ?minPrice[1] : 25000}</span></p>
          </div>
          <div>
            <select
              name="sortby"
              id="sortby"
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
            >
              <option>Sort</option>
              <option value="a">Title: A to Z</option>
              <option value="z">Title: Z to A</option>
              <option value={9999}>Price: High to Low</option>
              <option value={0}>Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap my-12 gap-4 mx-auto justify-center">
        {products.map((data) => (
          <Card
            key={data.id}
            image={data.thumbnail}
            category={data.category}
            title={data.title}
            price={data.price}
            onClick={() => addItemToCart(data)}
          />
        ))}
      </div>
      <div className="w-10/12 mx-auto flex justify-center">
        {" "}
        <Pagination
          total={total}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          defaultPageSize={20}
          defaultCurrent={1}
        />
      </div>
    </>
  );
}

export default Products;
