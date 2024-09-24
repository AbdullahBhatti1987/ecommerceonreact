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
  const [choosenCategory, setChoosenCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [limit, setLimit] = useState(20);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  
// ==================== Call to params & Context ===========================

  const { id } = useParams();
  const { search, setSearch } = useContext(SearchContext);
  const {
    addtoCart, setAddtoCart, addItemToCart, lessQuanityFromCart, removeItemFromCart, isItemAdded} = useContext(AddtoCartContext);
  

// =================== Event Functions ==============================

    const onChange = (value) => {
    // console.log("onChange: ", value);
  };

  const onChangeComplete = (value) => {
    console.log("onChangeComplete: ", value);
    const startPrice = value[0];
    const endPrice = value[1];
    setMinPrice(startPrice);
    setMaxPrice(endPrice);

    products.length == 0 ? 
    axios
    .get("https://dummyjson.com/products")
        .then((url) => {
          setProducts(url.data.products);
        })
    : setProducts(products.filter(data => data.price >= startPrice && data.price <= endPrice));
  };
  

  const handleCategoryClick = (category) => {
    setChoosenCategory(category);
    setMinPrice(0);
    setMaxPrice(5000);
    console.log(category);
  };

  // =================== API Call From Dummy JSON =========================

  useEffect(() => {
    setLoading(true);
    const categoryUrl = search
    ? `https://dummyjson.com/products/search?q=${search}`
    : choosenCategory === "All"
    ? "https://dummyjson.com/products"
    : `https://dummyjson.com/products/category/${choosenCategory}`
    
      axios
        .get(categoryUrl)
        .then((url) => {
          setProducts(url.data.products);
          setTotal(url.data.total);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    
  }, [choosenCategory]);

  // ====================== Sort By Filter ================================

    const HandleSortBy = (e) => {
      const sortValue = e.target.value;  
      setSortBy(sortValue); 
      const sortedProducts = sortValue === "atoz"
        ? products.sort((a, b) => (a.title > b.title ? 1 : -1))  
        : sortValue === "ztoa"
        ? products.sort((a, b) => (a.title < b.title ? 1 : -1)) 
        :sortValue === "0"
        ? products.sort((a, b) => (a.price > b.price ? 1 : -1))  
        : sortValue === "9999"
        ? products.sort((a, b) => (a.price < b.price ? 1 : -1)) 
        : products;
      setProducts(sortedProducts); 
    };

// ========================= Category Chip =================================

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((url) => {
        setCategories(url.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={"relative top-12 sm:ty-3"}>
      <div className="w-10/12 mx-auto flex gap-2 pt-6 flex-wrap justify-left sm:flex-nowrap overflow-scroll">
        <Chip id="All" title="All" onClick={() => handleCategoryClick("All")} />
        {categories.map((data) => (
          <Chip
            key={data.slug}
            title={data.name}
            onClick={() => handleCategoryClick(data.slug)}
          />
        ))}
      </div>
      <div className="block pt-6">
        <div className="lg:w-10/12 w-[90%] flex justify-between items-center gap-4 mx-auto">
          <div className="">
            <p>Price</p>
            <Slider
              className="w-48"
              range
              min={0}
              max={5000}
              step={100}
              defaultValue={[5, 5000]}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
            <p className="text-black flex gap-3 justify-center text-center">
              Rs:<span>{minPrice ? minPrice : 0}</span>to
              <span>{maxPrice ? maxPrice : 5000}</span>
            </p>
          </div>
          <div>
            <select
              name="sortby"
              id="sortby"
              onChange={HandleSortBy}
            >
              <option>Sort</option>
              <option value="atoz">Title: A to Z</option>
              <option value="ztoa">Title: Z to A</option>
              <option value={"0"}>Price: Low to High</option>
              <option value={"9999"}>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap my-12 gap-2 mx-auto justify-center">
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
      <div className="w-10/12 mx-auto flex justify-center mb-12">
        {" "}
        <Pagination
          onChange={(num) => {setSkip((num - 1) * limit)}}
          onShowSizeChange={(page, pageSize) => {setLimit(pageSize)}}
          defaultCurrent={1}
          total={total}
          pageSize={limit}
        />
      </div>
    </div>
  );
}

export default Products;
