import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import ProductDetail from "./ProductDetail";

const Cart = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/product", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      setAllProducts(res.data.products);
    } catch (error) {
      console.log("failed to get product: ", error);
      alert(error.response.data.message);
    }
    // console.log(allProducts);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>pieces</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((i, index) => {
            return (
              <tr key={index}>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>{i.pieces}</td>
                <td>
                  <ProductDetail prodId={i._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
