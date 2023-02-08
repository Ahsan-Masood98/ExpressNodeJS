import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap";
const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    pieces: 0,
  });

  const [allProducts, setAllProducts] = useState([]);

  const handleChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submittedValues: ", product);

    // axios.post("http://localhost:4000/api/product/add", { ...product });
    try {
      await axios.post(
        "http://localhost:4000/api/product/add",
        { ...product },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      );
    } catch (error) {
      console.log("failed to Add product: ", error);
      alert(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form onSubmit={handleSubmit} className="d-flex flex-column w-50">
        <FormGroup>
          <Label for="exampleName">Product Name</Label>
          <Input
            name="name"
            value={product.name}
            placeholder="Product Name"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Product Price</Label>
          <Input
            type="number"
            name="price"
            placeholder="Enter product Price"
            value={product.price}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pieces">Product Quantity</Label>
          <Input
            type="number"
            name="pieces"
            placeholder="Enter product Quantity"
            value={product.pieces}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
