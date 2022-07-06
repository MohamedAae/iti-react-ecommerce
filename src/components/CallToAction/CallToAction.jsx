const CallToAction = (props) => {
  return (
    <div className={props.width + " px-10"}>
      <h1 className={"text-white text-3xl font-serif font-bold mb-5 capitalize"}>
        {props.title ? props.title : `Our Offers`}
      </h1>
      <button
        class={
          "bg-white text-gray-900 font-medium py-2 px-8 rounded-lg text-sm"
        }
      >
        Shop All
      </button>
    </div>
  );
};

export default CallToAction;
