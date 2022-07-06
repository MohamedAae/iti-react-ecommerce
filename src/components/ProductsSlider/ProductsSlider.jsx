import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductsSlider = (props) => {
  const [swiperRef, setSwiperRef] = useState(null),
    title = props.title ? props.title : "Check Our Products",
    products = props.products,
    filter = props.filter,
    slidesPerView = props.slidesPerView ? +props.slidesPerView : 6,
    navigationEnabled = props.navigation ? props.navigation : true;

  return (
    <section className={"mt-5 px-10 py-10 bg-white shadow-md rounded-md"}>
      <h1
        className={
          "mb-7 col-span-full text-lg font-medium text-black capitalize"
        }
      >
        {title}
      </h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={slidesPerView}
        navigation={navigationEnabled}
        modules={[Navigation]}
        className={"mySwiper mt-2"}
      >
        {products
          .filter((product) => (filter ? product[filter] : true))
          .map((product, i, row) => {
            let border =
              i + 1 !== row.length ? "border-r-2 border-r-gray-100" : "";

            return (
              <SwiperSlide
                className={
                  "flex flex-col justify-evenly items-center font-light py-3 text-sm gap-y-7"
                }
              >
                <a href="#" className={"text-center"}>
                  <img
                    className={"w-fit h-32 object-contain"}
                    src={
                      product.thumbnail ? product.thumbnail : `product-image`
                    }
                    alt="product image"
                  />
                </a>
                <div className={"px-2 flex flex-col gap-y-5"}>
                  <a href="#" className={"line-clamp-2"}>
                    <h3 className={"text-gray-900"}>
                      {product.name ? product.name : `Product Title`}
                    </h3>
                  </a>
                  <div>
                    <span className="font-bold text-gray-900">
                      {product.discountRate
                        ? product.price - product.price * product.discountRate
                        : product.price}
                    </span>
                    {product.discountRate ? (
                      <span className="font-bold line-through text-gray-400 ml-1">
                        {product.price ? product.price : `000`}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={"flex flex-row font-medium"}>
                    {product.installment ? (
                      <>
                        <img
                          src="images/icons/minicash.png"
                          alt=""
                          className={"w-5 h-5"}
                        />
                        <span className={"ml-2"}>
                          or from {product.installment} LE/mo
                        </span>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default ProductsSlider;
