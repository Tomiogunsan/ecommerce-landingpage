import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ErrorPage from "./components/ErrorPage";
import RootLayout from "./components/Layout";
import { useState } from "react";
import { categories} from "./pages/Home/components/Categories";

function App() {
const [searchQuery, setSearchQuery] = useState("");
 const filteredCategories = categories.filter((category) =>
   category.name.toLowerCase().includes(searchQuery.toLowerCase())
 );
   const router = createBrowserRouter([
     {
       path: "/",
       element: <RootLayout searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>,
       errorElement: <ErrorPage />,
       children: [
         {
           path: "/",
           element: <Home filteredCategories={filteredCategories}/>,
         },
         {
           path: "/shop",
           element: <Shop />,
         },
         {
           path: "/about",
           element: <About />,
         },
         {
           path: "/blog",
           element: <Blog />,
         },
         {
           path: "/contact",
           element: <Contact />,
         },
        //  {
        //    path: "/apps",
        //    element: <Apps />,
        //  },
       ],
     },
   ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
