import { Link } from "react-router-dom";


const Blog = () => {
  return (
    <div className=" mt-20 h-[400px] w-full flex flex-col  gap-8 items-center justify-center ">
      <h1>Blog coming soon....</h1>
      <Link to='/'>
        <button className="rounded-md bg-black text-white py-3 px-4 pb-4 ">
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
}

export default Blog