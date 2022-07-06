import {PhoneIcon} from "@heroicons/react/solid";

const TopPanel = () => {
  return (
    <div className={"w-full h-12 bg-neutral-800 text-neutral-50 text-xs font-bold"}>
      <div className={"container mx-auto h-full flex flex-row justify-between items-center"}>
        <p>
          <span className={"text-gray-400"}>Delivery Location:</span> Menofia
        </p>
        <ul className={"flex flex-row gap-x-5"}>
          <li>Sell</li>
          <li>Blog</li>
          <li className={"capitalize"}>
            <PhoneIcon className="inline h-3.5 w-3.5"/> Call 10092
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopPanel;
