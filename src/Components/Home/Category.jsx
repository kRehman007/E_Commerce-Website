import React, { useState, useEffect } from "react";
import "./HomeStyle.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiMobile4 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";
import Msc from "../../../public/MBG.png";
import Ms from "../../../public/SMBG.avif";
import CustomModal from "../../Context/Modal";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEcomContext } from "../../Context/ContextAPI";

const Category = () => {
  const navigate = useNavigate();
  const Array = [
    { id: 1, icon: <CiMobile4 />, name: "Phones" },
    { id: 2, icon: <HiOutlineComputerDesktop />, name: "Computers" },
    { id: 4, icon: <BsSmartwatch />, name: "SmartWatch" },
    { id: 4, icon: <FiHeadphones />, name: "Headphones" },
    { id: 5, icon: <MdOutlineCameraAlt />, name: "Camera" },
    { id: 6, icon: <LuGamepad2 />, name: "Gaming" },
  ];
  return (
    <div className="flex flex-col space-y-1 p-3 ml-5 md:ml-16 mt-11">
      <div className="flex space-x-1 rounded-sm items-center">
        <div className="w-3 h-[30px] bg-red-600 border-none"></div>
        <span className="text-sm text-red-600 font-semibold">Categories</span>
      </div>
      <h2 className="text-2xl font-bold">Browse By Catogery</h2>
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-6 mt-3 md:pt-2 cursor-pointer">
        {Array.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 w-[90px] h-[90px] md:w-[120px] md:h-[120px] border border-gray-400
        items-center justify-center hover:bg-red-600 hover:text-white"
            onClick={() => navigate(`/${item.name}`)}
          >
            <p className="text-3xl">{item.icon}</p>
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SellingProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    AddItemsToWish,
    GetDocumentData,
    isWish,
    setIsWish,
    RemoveItemsToWish,
  } = useEcomContext();
  const [ItemList, setIsItemList] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const FlashData = await GetDocumentData();
      const MenImage = FlashData?.images.filter((item) =>
        item.category.includes("Men")
      )[0];
      const SportsImage = FlashData?.images.filter((item) =>
        item.category.includes("Sports")
      )[0];
      const ToysImage = FlashData?.images.filter((item) =>
        item.category.includes("Toys")
      )[0];
      const WomenImage = FlashData?.images.filter((item) =>
        item.category.includes("Women")
      )[0];

      const selectedImages = [];
      if (MenImage) selectedImages.push(MenImage);
      if (SportsImage) selectedImages.push(SportsImage);
      if (WomenImage) selectedImages.push(WomenImage);
      if (ToysImage) selectedImages.push(ToysImage);

      setData(selectedImages);
    };
    getData();
  }, []);

  const handleModal = (item) => {
    setIsItemList(item);
    onOpen();
  };
  const handleWish = (item) => {
    setIsWish((prev) => ({
      ...prev,
      [item.id]: !prev[item.id],
    }));
  };
  return (
    <>
      <div className=" products flex flex-col space-y-1 p-3 ml-4 md:ml-16 mt-11 md:mb-16">
        <div className="flex space-x-1 rounded-sm items-center">
          <div className="w-3 h-[30px] bg-red-600 border-none"></div>
          <span className="text-sm text-red-600 font-semibold">This Month</span>
        </div>
        <h2 className="text-2xl font-bold md:pb-3">Best Selling Products</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-2   ">
          {data?.map((item, index) => (
            <div key={index}>
              <Card className="w-[150px] h-[200px] md:w-[260px] md:h-[300px]">
                <Card.Img
                  variant="top"
                  src={item.src}
                  className="h-[100px] md:h-[200px] object-cover
      cursor-pointer"
                  onClick={() => handleModal(item)}
                />
                <Card.Body className="pt-2">
                  <Card.Title className="text-sm mb-0 md:text-xl font-semibold">
                    {item.name}
                  </Card.Title>
                  <Card.Text>${item.price}</Card.Text>
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
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title={ItemList?.name}
        img={ItemList?.img}
        id={ItemList?.id}
        price={ItemList?.price}
      />
    </>
  );
};

export const Music = () => {
  const [isScreen, setIsScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsScreen(false);
      } else {
        setIsScreen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsScreen]);
  return (
    <>
      {!isScreen ? (
        <div className="flex w-[90%] mt-7 justify-around  h-[450px] relative left-[50%] translate-x-[-50%] bg-black">
          <div className="pt-16 pl-6">
            <p className="text-3xl text-green-600 font-medium mb-2">
              Categories
            </p>
            <h1 className="font-semibold text-4xl mb-3 ">
              Enhance Your
              <br />
              Music Experience
            </h1>
            <button className="bg-green-600 px-4 py-2 text-xl">Buy Now</button>
          </div>
          <img src={Msc} className="p-3" />
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${Ms})`, backgroundSize: "cover" }}
          className="w-[90%] h-[400px] relative left-[50%] translate-x-[-50%]
    mt-11"
        >
          <div className="relative top-32 left-5">
            <p className="text-3xl text-green-600 font-medium mb-2">
              Categories
            </p>
            <h1 className="font-semibold text-4xl mb-3 ">
              Enhance Your
              <br />
              Music Experience
            </h1>
            <button className="bg-green-600 px-4 py-2 text-xl">Buy Now</button>
          </div>
        </div>
      )}
    </>
  );
};
export default Category;
