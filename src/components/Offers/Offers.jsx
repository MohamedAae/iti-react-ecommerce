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
        "mt-5 py-10 flex flex-row bg-no-repeat bg-cover bg-left-top" +
        ` ${background}`
      }
    >
      <CallToAction width="w-1/4" title={title} />
      <div className={"w-3/4 px-10 flex flex-row justify-between gap-x-4"}>
        {products &&
          products.filter(product => filter ? product[filter] : true).map((product) => {
            return (
              <Card
                name={product.name}
                thumbnail={product.thumbnail}
                price={product.price}
                priceAfterDiscount={
                  product.price - product.price * product.discountRate
                }
                installment={product.installment}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Offers;
