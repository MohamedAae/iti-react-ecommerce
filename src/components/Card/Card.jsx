import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div
      className={
        "max-w-xs w-52 flex flex-col justify-evenly bg-white rounded-lg shadow-md py-3 text-sm"
      }
    >
      <div className={"text-center"}>
        <img
          className={"w-full h-20 object-contain"}
          src={props.thumbnail ? props.thumbnail : `product-image`}
          alt="product image"
        />
      </div>
      <div className={"px-2 flex flex-col gap-y-2"}>
        <Link to={props.slug ? props.slug : "#"}>
          <small className={"text-gray-900 text-clip"}>
            {props.name ? props.name : `Product Title`}
          </small>
        </Link>
        <div>
          <span className="font-bold text-xs text-gray-900">
            {props.priceAfterDiscount ? props.priceAfterDiscount : `000`}
          </span>
          <span className="font-bold text-xs line-through text-gray-400 ml-1">
            {props.price ? props.price : `000`}
          </span>
        </div>
        <div className={"flex flex-row text-xs font-bold"}>
          {props.installment ? (
            <>
              <img src="images/icons/minicash.png" alt="" className={"w-5"} />
              <span className={"ml-2"}>or from {props.installment} LE/mo</span>
            </>
          ) : (
            <span className={"font-light text-gray-600"}>No Installments</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
