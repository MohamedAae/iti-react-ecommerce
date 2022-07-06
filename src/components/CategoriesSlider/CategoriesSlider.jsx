import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = require("../../api/categories.json");
const CategoriesSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className={"mt-2 py-5 bg-white shadow-sm rounded-b-md"}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={8}
        navigation={true}
        modules={[Navigation]}
        className={"mySwiper"}
      >
        {categories.map((category) => {
          return (
            <SwiperSlide
              className={
                "flex flex-col justify-center items-center text-center text-xs font-bold"
              }
            >
              <img src={category.thumbnail} alt={category.title} />
              <Link to={"category/" + category.slug}>{category.title}</Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CategoriesSlider;
