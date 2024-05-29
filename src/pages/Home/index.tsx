import Categories from "./components/Categories"
import FeaturedProduct from "./components/FeaturedProduct"
import Slider from "./components/Slider"


const Home = () => {
  return (
    <div>
        <Slider/>
        <FeaturedProduct/>
        <Categories/>
    </div>
  )
}

export default Home