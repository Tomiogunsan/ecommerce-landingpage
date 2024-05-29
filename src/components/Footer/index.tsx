import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-18">
      <div className="flex justify-between">
        <Link to="/">
          <div className="text-2xl tracking-wide">TOMIA</div>
        </Link>
        <div className="flex items-center gap-2">
          <FaInstagram />
          <BsTwitterX />
          <FaFacebook />
          <FaYoutube />
        </div>
      </div>
      <div className="border-b-[1px] border-gray-300 mt-8" />
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-y-8 pt-14">
        <div className="grid gap-y-4">
          <h1 className="font-medium text-lg">COMPANY</h1>
          <div className="flex flex-col gap-4">
            <Link to="/About">About Us</Link>
            <Link to="/shop">Shop</Link>

            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="grid gap-y-4">
          <h1 className="font-medium text-lg">LEGAL</h1>
          <div className="flex flex-col gap-4">
            <Link to="/About">About Us</Link>
            <Link to="/shop">Shop</Link>

            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="grid gap-y-4">
          <h1 className="font-medium text-lg">RESOURCES</h1>
          <div className="flex flex-col gap-4">
            <Link to="">IOS & Andriod</Link>
            <Link to="">Watch a Demo</Link>

            <Link to="">Customers</Link>
            <Link to="">API</Link>
          </div>
        </div>{" "}
        <div className="grid gap-y-4">
          <h1 className="font-medium text-lg">FEATURES</h1>
          <div className="flex flex-col gap-4">
            <Link to="">Business Marketing</Link>
            <Link to="">User Analytic</Link>

            <Link to="">Live Chat</Link>
            <Link to="">Unlimited Support</Link>
          </div>
        </div>{" "}
        <div className="grid gap-y-4">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-[#94004f] text-white">JOIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer