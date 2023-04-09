import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://lindagiorgadze.github.io/FakeServer/products.json")
      .then((response) => {
        setProducts(response.data?.Products);
      });
  }, []);

  return (
    <div>
      <h3>Products List</h3>
      <div className="grid">
        {products?.map((product) => {
          return (
            <div onClick={() => navigate(`/products/ ${product.id}`)} className="productCard" key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.img} alt={product.title} />
              {/* <Link to={`/products/ ${product.id}`}> See More Details </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
