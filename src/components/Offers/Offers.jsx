import Card from "../Card/Card";
import CallToAction from "../CallToAction/CallToAction";

const Offers = (props) => {
  const title = props.title,
    products = props.products,
    // background = props.background ? `bg-${props.background}` : "bg-fuchsia-900",
    background = props.background == "summer" ? `bg-summer` : "bg-minicash",
    filter = props.filter ? props.filter : "";

  return (
    <div
      className={
        "mt-5 py-10 flex flex-row flex-wrap bg-no-repeat bg-cover bg-left-top gap-y-5" +
        ` ${background}`
      }
    >
      <CallToAction width="w-full md:w-1/5" title={title} />
      <div
        className={
          "w-full md:w-4/5 px-10 flex flex-row flex-wrap lg:flex-nowrap justify-center md:justify-between  gap-x-4 gap-y-4"
        }
      >
        {products &&
          products
            .filter((product) => (filter ? product[filter] : true))
            .map((product) => {
              return (
                <Card
                  name={product.name}
                  thumbnail={product.thumbnail}
                  price={product.price}
                  priceAfterDiscount={
                    product.price - product.price * product.discountRate
                  }
                  installment={product.installment}
                  slug={'/product/' + product.slug}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Offers;
