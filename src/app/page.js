import Categories from "@/components/Categories/Categories";
import FeaturedSlider from "@/components/FeaturedSlider/FeaturedSlider";
import Homepage from "@/components/Homepage/Homepage";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import Trend from "@/components/Trend/Trend";

export default function Home() {
  return (
    <div className="pageContainer">
      <Homepage />
      <Categories />
      <FeaturedSlider />
      <PopularProducts />
      <Trend />
    </div>
  );
}
