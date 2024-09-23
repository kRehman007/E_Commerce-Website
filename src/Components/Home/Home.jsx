import React, { useState, useEffect } from "react";
import "./HomeStyle.css";
import { NavLink } from "react-router-dom";
import { useEcomContext } from "../../Context/ContextAPI";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import FlashSale, { Delivery, NewArrival, OurProducts } from "./FlashSale";
import Category, { Music, SellingProducts } from "./Category";

const Home = () => {
  const { GetDocumentData } = useEcomContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const FlashData = await GetDocumentData();

      setData(FlashData?.images);
    };
    getData();
  }, []);

  return (
    <>
      <div
        className="w-[90%] relative left-[50%] translate-x-[-50%]  lg:h-[min-content] 
      flex space-x-4  justify-center pt-5"
      >
        <ul className="text-black hidden lg:block whitespace-nowrap border-r-2 pr-16">
          <li className="pt-3">
            <NavLink to="/WomenFashion">Woman's Fashion</NavLink>
          </li>
          <li>
            <NavLink to="/MenFashion">Man's Fashion</NavLink>
          </li>
          <li>
            <NavLink to="/Electronics">Electronics</NavLink>
          </li>
          <li>
            <NavLink to="/Medicine">Medicine</NavLink>
          </li>
          <li>
            <NavLink to="/Sports">Sports @ Outdoor</NavLink>
          </li>
          <li>
            <NavLink to="/Baby">Baby's & Toys</NavLink>
          </li>
          <li>
            <NavLink to="/Groceries">Groceries & Beauty</NavLink>
          </li>
        </ul>

        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".custom-pagination" }}
        >
          {data?.slice(15, 20).map((res, index) => (
            <SwiperSlide key={index}>
              <div className="p-2 lg:p-16 flex-1 h-[300px] lg:h-[420px]">
                <img src={res.img} className="w-[100%] h-[100%]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-pagination mt-4 flex justify-center text-black space-x-2"></div>

      <FlashSale />
      <Category />
      <SellingProducts />
      <Music />
      <OurProducts />
      <NewArrival />
      <Delivery />
    </>
  );
};

export default Home;
