import { useState, useEffect } from "react";
import axios from "axios";

const UseProductData = (setIsLoading) => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);

  return products;
};

export default UseProductData;
