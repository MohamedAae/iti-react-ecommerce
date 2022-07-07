import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = require("../../api/categories.json");
const ThumbsSlider = (props) => {
  const [swiperRef, setSwiperRef] = useState(null);

  const history = props.history ? true : false,
    justifySlides = history ? "justify-start" : "justify-center",
    slides = props.slides ? props.slides : categories,
    background = props.background ? props.background : "bg-white",
    shadow = props.shadow ? props.shadow : "";

  return (
    <section
      className={
        background + " max-w-7xl mx-auto mt-4 py-5 rounded-md " + shadow
      }
    >
      {history ? (
        <p className={"font-bold text-xl text-gray-800"}>Recently Viewed</p>
      ) : (
        ""
      )}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className={"mySwiper"}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide
              className={
                "mt-4 flex flex-col text-center text-xs font-bold " +
                justifySlides
              }
            >
              {history ? (
                <Link to={"/product/" + slide.slug}>
                  <img
                    src={slide.thumbnail}
                    alt={slide.title}
                    className={"p-2 h-20 w-20 border rounded-md"}
                  />
                </Link>
              ) : (
                <img src={slide.thumbnail} alt={slide.title} />
              )}
              <Link to={"category/" + slide.slug}>{slide.title}</Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ThumbsSlider;
