import TopPanel from "./TopPanel";
import Navbar from "./Navbar";

import logo from "../../logo.png";

const Header = () => {
  return (
    <header>
      <TopPanel />
      <Navbar logo={logo} />
    </header>
  );
};

export default Header;
