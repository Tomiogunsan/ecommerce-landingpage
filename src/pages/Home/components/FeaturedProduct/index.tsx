import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    img: "/fixed-height.svg",
    imgItem: "taylor.svg",
    name: "Gold Wrist Watch",
    price: "₦5000",
    description: "Elegant wristwatch",
  },
  {
    id: 2,
    img: "/sofa.svg",
    imgItem: "Group 3742.svg",
    name: "Comfortable Sofa",
    price: "₦50000",
    description: "Stay in Comfort",
  },
  {
    id: 3,
    img: "/Component 8.svg",
    imgItem: "/bag.svg",
    name: "Gucci Bag",
    price: "₦7000",
    description: "Be Extraordinary",
  },
  {
    id: 4,
    img: "/Component 7.svg",
    imgItem: "/hat.svg",
    name: "Headset",
    price: "₦15000",
    description: "Music all around you",
  },
];

function FeaturedProduct() {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">Featured Products</h1>
      <div className=" hidden mt-12 lg:flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {products.map((product) => (
          <Link
            to="/shop"
            key={product.id}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            <div className="relative w-full h-80 ">
              <img
                src={product.img}
                alt=""
                className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
              <img
                src={product.imgItem}
                alt="/"
                className="hidden lg:block absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">{product.price}</span>
            </div>
            <div className="text-sm text-gray-500">{product.description}</div>
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
      <div className="grid md:grid-cols-2  gap-6 lg:hidden mt-12 ">
        {products.map((product) => (
          <Link to="/shop" key={product.id} className="w-full">
            <div className="w-full h-80 ">
              <img
                src={product.img}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-between pt-6 pb-2">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">{product.price}</span>
            </div>
            <div className="text-sm text-gray-500 pb-2">{product.description}</div>
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white mb-4">
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProduct