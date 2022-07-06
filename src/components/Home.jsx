import Slider from "./slider/Slider";
import CategoriesSlider from "./CategoriesSlider/CategoriesSlider";
import Offers from "./Offers/Offers";
import ProductsSlider from "./ProductsSlider/ProductsSlider";

const products = require("../api/products.json");
const Home = () => {
  return (
    <div className={"container mx-auto mt-4 font-sans"}>
      <Slider />
      <CategoriesSlider />
      <ProductsSlider
        title="New Arrivals"
        products={products}
        filter="isNew"
        slidesPerView="5"
      />
      <Offers
        title="Summer Offers"
        products={products}
        background="summer"
        filter="summerOffer"
      />
      <Offers
        title="Minicash Offers"
        products={products}
        background="minicash"
        filter="minicashOffer"
      />
      <CategoriesSlider />
    </div>
  );
};

export default Home;
