import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import Selectedcategory from "../components/Selectedcategory";

const title = <h2>Search your product</h2>;
const desc = "We have the largest collection of products all over Nepal";
const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1 crore customers" },
  { iconName: "icofont-notification", text: "More than 2000 merchants" },
  { iconName: "icofont-globe", text: "Buy anything online" },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // filtered products
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <Selectedcategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search-1"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
