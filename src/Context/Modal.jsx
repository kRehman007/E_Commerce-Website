// CustomModal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEcomContext } from "../Context/ContextAPI";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const CustomModal = ({ isOpen, onClose, title, img, id, qty = 1, price }) => {
  const navigate = useNavigate();
  const { AddItemsToCart, setBuyItem, BuyItem, isLoggedIn } = useEcomContext();

  const hanldeCart = (id, title, qty, img, price) => {
    AddItemsToCart(id, title, qty, img, price);
  };

  const handleBuyNow = (id, title, qty, img, price) => {
    if (!isLoggedIn) {
      alert("Please login First");
    } else {
      setBuyItem(() => [
        { id: id, title: title, qty: qty, img: img, price: price },
      ]);
      navigate("/BuyNow");
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="mt-0">
      <ModalOverlay />
      <ModalContent w="80vw">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <img src={img} className="max-h-[200px]" />
          <h2 className="font-semibold text-2xl  mt-1 ">Description</h2>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div
            className="flex flex-col space-y-1 space-x-0 md:flex-row md:space-x-1 md:space-y-0
        rounded-sm mt-4"
          >
            <button
              className="bg-red-400 h-[min-content] px-3 py-2"
              onClick={() => hanldeCart(id, title, qty, img, price)}
            >
              Add to Cart
            </button>
            <button
              className="bg-green-400 px-3 py-2 text-white mb-3"
              onClick={() => handleBuyNow(id, title, qty, img, price)}
            >
              Buy Now
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
