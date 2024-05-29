import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import SocialMediaBanner from "../SocialMediaBanner";
import Footer from "../Footer";

const RootLayout = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <div className="fixed top-0 z-20 w-full">
        <SocialMediaBanner />
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
