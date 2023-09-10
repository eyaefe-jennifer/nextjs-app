/** @format */
import Link from "next/link";
import logo from "./FX1.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className=" flex justify-between">
        <Image src={logo} alt="my logo" width={70} height={70} />
        <h2>Jennys Helpdesk</h2>
        <Link href="/"> Dashboard</Link>
        <Link href="/tickets"> Tickets</Link>
      </nav>
    </div>
  );
};
export default Navbar;
