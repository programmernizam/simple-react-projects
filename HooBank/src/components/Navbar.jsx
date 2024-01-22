import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
export default function Navbar() {
  return (
    <div>
      <img src={close} alt="" />
      <img src={logo} alt="" />
      <img src={menu} alt="" />
      <a href={navLinks.home}></a>
    </div>
  );
}
