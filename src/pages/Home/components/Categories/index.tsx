import { Link } from "react-router-dom";


const categories = [
    {
        id:1,
        img: '/joggers.svg',
        name: 'Joggers',
    },
    {
        id: 2,
        img: '/bags.svg',
        name: 'Bags',
    },
    {
        id: 3,
        img: '/electronics.svg',
        name: 'Electronic Gadget',
    },
    {
        id: 4,
        img: '/accessories.svg',
        name: 'Accessories',
    },
    {
        id: 5,
        img: '/interiors.svg',
        name: 'Interiors',
    },
    {
        id: 6,
        img: '/scarf.svg',
        name: 'Scarfs',
    },
    {
        id: 7,
        img: '/shoes.svg',
        name: 'Sneakers',
    },
    {
        id: 8,
        img: '/dress.svg',
        name: 'Dress',
    },
    {
        id: 8,
        img: '/sofa pic.svg',
        name: 'Furnitures',
    },
]
const Categories = () => {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl mb-12">
        Categories
      </h1>
      <div className="px-4 overflow-x-scroll scrollbar-hide ">
        <div className="flex gap-4 md:gap-8">
          {categories.map((category) => (
            <Link
              to="/shop"
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
              key={category.id}
            >
              <div className="relative bg-slate-100 w-full h-96">
                <img src={category.img} className="object-cover  w-full h-full" />
              </div>
              <h1 className="mt-8 font-light text-xl tracking-wide">
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories