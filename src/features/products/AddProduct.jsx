import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ProductForm from "./ProductForm";

function AddProduct() {
  const [isClicked, setIsClicked] = useState(false);
  function handlClick() {
    setIsClicked((isClicked) => !isClicked);
  }
  return (
    <>
      <Button variation="primary" onClick={handlClick}>
        Add Product
      </Button>
      {isClicked && (
        <Modal>
          <Modal.Window>
            <ProductForm onClose={handlClick} />
          </Modal.Window>
        </Modal>
      )}
    </>
  );
}

export default AddProduct;
