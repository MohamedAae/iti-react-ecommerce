import { PhoneIcon } from "@heroicons/react/solid";

const TopPanel = () => {
  return (
    <div
      className={"w-full h-12 bg-neutral-800 text-neutral-50 text-xs font-bold"}
    >
      <div
        className={
          "container h-full flex flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        }
      >
        <p>
          <span className={"text-violet-300 opacity-70"}>Delivery Location:</span> Menofia
        </p>
        <ul className={"flex flex-row gap-x-5"}>
          <li className={"capitalize text-violet-100"}>
            <PhoneIcon className="inline h-3.5 w-3.5" /> Call 10092
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopPanel;
