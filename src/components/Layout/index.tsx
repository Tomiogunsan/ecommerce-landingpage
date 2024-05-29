
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import SocialMediaBanner from "../SocialMediaBanner";

const RootLayout = () => {
  return (
    <>
    <SocialMediaBanner/>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
