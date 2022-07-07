import Slider from "./Slider/Slider";
import ThumbsSluder from "./ThumbsSlider/ThumbsSlider";
import Offers from "./Offers/Offers";
import ProductsSlider from "./ProductsSlider/ProductsSlider";

const products = require("../api/products.json");
const Home = () => {
  return (
    <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 font-sans"}>
      <Slider />
      <Offers
        title="Summer Offers"
        products={products}
        background="summer"
        filter="summerOffer"
      />
      <ThumbsSluder />
      <ProductsSlider
        title="New Arrivals"
        products={products}
        filter="isNew"
        slidesPerView="5"
      />
      <Offers
        title="Minicash Offers"
        products={products}
        background="minicash"
        filter="minicashOffer"
      />
    </div>
  );
};

export default Home;
