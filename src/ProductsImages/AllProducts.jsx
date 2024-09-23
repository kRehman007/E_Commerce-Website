import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import CustomModal from "../Context/Modal.jsx";
import { useDisclosure } from "@chakra-ui/react";
import { useEcomContext } from "../Context/ContextAPI.jsx";

const AllProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ItemList, setItemList] = useState("");
  const {
    GetDocumentData,
    AddItemsToWish,
    isWish,
    setIsWish,
    RemoveItemsToWish,
  } = useEcomContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const FlashData = await GetDocumentData();
      setData(FlashData?.images);
    };
    getData();
  }, []);

  const handleWish = (item) => {
    setIsWish((prev) => ({
      ...prev,
      [item.id]: !prev[item.id],
    }));
  };

  const handleModal = (item) => {
    setItemList(item);
    onOpen();
  };
  return (
    <>
      <div className="flex flex-wrap items-center justify-center mt-5 gap-4 overflow-hidden ">
        {data?.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <Card className="w-[150px]  min-h-[200px] md:w-[260px] md:min-h-[300px]">
              <Card.Img
                variant="top"
                src={item.img || item.src}
                className="h-[100px] md:h-[200px] object-cover
      cursor-pointer"
                onClick={() => handleModal(item)}
              />
              <Card.Body className="pt-2">
                <Card.Title className="text-sm mb-0 md:text-xl font-semibold">
                  {item.name}
                </Card.Title>
                <Card.Text
                  style={{ color: "red", fontSize: "17px", fontWeight: "bold" }}
                >
                  ${item.price}
                </Card.Text>
                <div
                  className="text-2xl md:text-3xl cursor-pointer  absolute top-5 right-5"
                  onClick={() => handleWish(item)}
                >
                  {isWish[item.id] ? (
                    <BsHeartFill
                      className="text-red-600"
                      onClick={() => RemoveItemsToWish(item)}
                    />
                  ) : (
                    <FaRegHeart
                      className="text-white"
                      onClick={() => AddItemsToWish(item)}
                    />
                  )}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        price={ItemList.price}
        title={ItemList?.name}
        id={ItemList.id}
        img={ItemList?.img || ItemList?.src}
      />
    </>
  );
};

export default AllProducts;
