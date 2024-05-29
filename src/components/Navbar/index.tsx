import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* mobile  */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link to="/">
          <div className="text-2xl tracking-wide">TOMIA</div>
        </Link>
      </div>
      {/* desktop  */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-12 h-12" />
            <div className="text-2xl tracking-wide">TOMIA</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>

            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        {/* right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <div className="flex gap-2">
            <CgProfile size={24} />
            <FaShoppingCart size={24} />
            <FcLikePlaceholder size={24} />
            <CiBellOn size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
