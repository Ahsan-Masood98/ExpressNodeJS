import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProductDetail = ({ prodId }, args) => {
  const [product, setProduct] = useState({});
  const [owner, setOwner] = useState({});
  const [modal, setModal] = useState(false);
  // console.log(product);

  const getProduct = async () => {
    setModal(!modal);
    //geting productInfo
    try {
      const res = await axios.get(
        `http://localhost:4000/api/product/${prodId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      );
      setProduct(res.data.product);
      setOwner(res.data.product.owner);
    } catch (error) {
      console.log("failed to get product: ", error);
      alert(error.response.data.message);
    }
  };
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="danger" onClick={getProduct}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Product Detail</ModalHeader>
        <ModalBody>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Pieces: {product.pieces}</p>
          <h3>OwnerInfo</h3>
          <p>Name: {owner.name}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductDetail;
