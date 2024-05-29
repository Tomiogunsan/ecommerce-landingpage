
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import SocialMediaBanner from "../SocialMediaBanner";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <>
      <SocialMediaBanner />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
