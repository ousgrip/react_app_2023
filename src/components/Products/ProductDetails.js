import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://lindagiorgadze.github.io/FakeServer/products.json")
      .then((response) => {
        setProduct(response.data?.Products);
        console.log(response.data?.Products);
      });
  }, []);

  return (
    <div>
      <h3> Product Detailed Page </h3>
      <h4>{productId}</h4>
      {product
        ?.filter((prod) => prod.id == productId)
        ?.map((prod) => {
          return (
            <div>
              <h2 key={prod.id}>{prod.title}</h2>
              <img className="productImageCover" src={prod.img} alt={prod.title} />
            </div>
          );
        })}
    </div>
  );
};

export default ProductDetails;
