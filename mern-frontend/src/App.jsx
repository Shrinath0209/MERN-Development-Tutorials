import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:8080/api/products");
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <li>{product.name}</li>
      ))}
    </div>
  );
}
export default App;
