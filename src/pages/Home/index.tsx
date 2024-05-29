import Categories, { ICategoryProps } from "./components/Categories"
import FeaturedProduct from "./components/FeaturedProduct"
import Slider from "./components/Slider"


const Home = ({
  filteredCategories,
}: {
  filteredCategories: ICategoryProps;
}) => {
  return (
    <div>
      <Slider />
      <FeaturedProduct />
      <Categories filteredCategories={filteredCategories}/>
    </div>
  );
};

export default Home