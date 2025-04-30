import axios from "axios";
import { useEffect, useState } from "react";
import Spincomp from "../day8/spin";
import "./Apiex2.css"; // Import custom CSS
import { Link } from "react-router-dom";

function Apiex2() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">useEffect API Example</h1>
      {
        products.length > 0 ? (
          <div className="card-grid">
            {products.map((product, index) => (
              <div className="card" key={index}>
                <img src={product.image} alt={product.title} className="card-img" />
                <div className="card-content">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="card-price">${product.price}</p>
                  <p className="card-desc">{product.description}</p>
                  <button className="card-btn text-light">
                    <Link to={`/${product.category}/${product.id}`}>
                    View more
                    </Link>
                    </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="loading">
            <Spincomp />
          </div>
        )
      }
    </div>
  );
}

export default Apiex2;
