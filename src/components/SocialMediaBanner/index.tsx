import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SocialMediaBanner = () => {
  return (
    <div className="h-20  bg-[#94004f] text-[#fff] font-bold">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <MdOutlinePhone />
            <p>+1234567890</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineMailOutline />
            <p>tomiamabel@gmail.com</p>
          </div>
        </div>
        <div>Follow us and get a chance to win 80% off</div>
        <div className="flex gap-4">
          <p>Follow us : </p>
          <div className="flex items-center gap-2">
            <FaInstagram />
            <BsTwitterX />
            <FaFacebook />
            <FaYoutube/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialMediaBanner;
