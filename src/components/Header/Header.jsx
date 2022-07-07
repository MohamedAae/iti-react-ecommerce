import TopPanel from "./TopPanel";
import Navbar from "./Navbar";

import logo from "../../logo.png";

const Header = () => {
  return (
    <header className={"z-10"}>
      <TopPanel />
      <Navbar logo={logo} />
    </header>
  );
};

export default Header;
