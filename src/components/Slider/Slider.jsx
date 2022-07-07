import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";

const offers = require("../../api/offers.json");
const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={"mySwiper rounded-t-md"}
      >
        {
          offers.map(offer => {
            return (
              <SwiperSlide><img src={offer.image} alt={"Offer"} /></SwiperSlide>
            );
          })
        }
      </Swiper>
    </>
  );
}

export default Slider;