import { useParams } from "react-router-dom";

import ProductsFilters from "./ProductsFilters/ProductsFilters";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

const category = require("../api/categories.json"),
  products = require("../api/products.json");
const Category = () => {
  const { slug } = useParams(),
    category = getCategory(slug),
    id = category.id,
    categoryTitle = category.title,
    categoryProducts = getCategoryProducts(id, products);

  return (
    <div className={"container mx-auto flex flex-row flex-wrap md:flex-nowrap"}>
      <ProductsFilters width="w-full md:w-1/3 lg:w-1/4" category={category} />
      <ProductsGrid
        width="w-full md:w-2/3 lg:w-3/4"
        title={categoryTitle}
        products={categoryProducts}
      />
    </div>
  );
};

const getCategory = (categorySlug) => {
  const currentCategory = category.filter(
    (category) => category.slug === categorySlug
  );
  return currentCategory.length === 1 ? currentCategory[0] : false;
};

const getCategoryProducts = (categoryId, products) => {
  const currentProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  return currentProducts;
};

export default Category;
