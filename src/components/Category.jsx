import { useParams } from "react-router-dom";

import ProductsGrid from "./ProductsGrid/ProductsGrid";

const category = require("../api/categories.json"),
  products = require("../api/products.json");
const Category = () => {
  const { slug } = useParams(),
    id = getCategoryId(slug),
    categoryProducts = getCategoryProducts(id, products);

  return (
    <div className={"container mx-auto flex flex-row"}>
      <div className={"w-1/4"}></div>
      <ProductsGrid width="3/4" products={categoryProducts} />
    </div>
  );
};

const getCategoryId = (categorySlug) => {
  const currentCategory = category.filter(
    (category) => category.slug === categorySlug
  );
  return currentCategory.length === 1 ? currentCategory[0].id : false;
};

const getCategoryProducts = (categoryId, products) => {
  const currentProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  return currentProducts;
};

export default Category;
