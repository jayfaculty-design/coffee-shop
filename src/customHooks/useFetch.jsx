import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = () => {
    setLoading(true);
    setError("");
    axios({
      method: "get",
      url: url,
    })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setError("");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Problem in loading Products");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [loading, products, error, fetchData];
};

export default useFetch;
