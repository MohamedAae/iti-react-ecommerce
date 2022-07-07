import { Link } from "react-router-dom";

const defaultProducts = require("../../api/products.json");
const ProductsGrid = (props) => {
  const sectionWidth = props.width ? props.width : "",
    title = props.title ? props.title : "Our Products",
    products = props.products ? props.products : defaultProducts,
    cols = props.cols
      ? `grid-cols-1 md:grid-cols-2 lg:grid-cols-${props.cols}`
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={sectionWidth + " grid gap-0 mt-5 py-10 bg-white " + cols}>
      <h1
        className={
          "mb-7 p-3 col-span-full text-lg font-medium text-black capitalize"
        }
      >
        {title}
      </h1>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className={
              "flex flex-col justify-evenly p-3 text-md gap-y-5 border-t border-r border-t-gray-100 border-r-gray-100"
            }
          >
            <a
              href="#"
              className={
                "flex items-center justify-center text-center h-40 object-contain"
              }
            >
              <img
                className={"max-h-full"}
                src={
                  product.thumbnail
                    ? process.env.PUBLIC_URL + product.thumbnail
                    : `product-image`
                }
                alt="product image"
              />
            </a>
            <div className={"px-2 flex flex-col gap-y-2"}>
              <span className={"line-clamp-2"}>
                <Link
                  to={"/product/" + product.slug}
                  className={"text-gray-900"}
                >
                  {product.name ? product.name : `Product Title`}
                </Link>
              </span>
              <div>
                {product.discountRate ? (
                  <>
                    <span className="font-bold text-gray-900">
                      {product.price - product.discountRate * product.price}
                    </span>
                    <span className="font-bold line-through text-gray-400 ml-1">
                      {product.price}
                    </span>
                  </>
                ) : (
                  <span className="font-bold text-gray-900">
                    {product.price}
                  </span>
                )}
              </div>
              <div className={"flex flex-row font-medium"}>
                {product.installment ? (
                  <>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icons/minicash.png"
                      }
                      alt=""
                      className={"w-5 h-5"}
                    />
                    <span className={"ml-2"}>
                      or from {product.installment} LE/mo
                    </span>
                  </>
                ) : (
                  <span className={"font-light text-gray-600"}>
                    No Installments
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
