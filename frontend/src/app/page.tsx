import Carousal from "./_pages/Carousal";
import Catagory from "./_pages/Catagory";
import FeaturedProducts from "./_pages/FeaturedProducts";

export default function Home() {
  return (
    <div className="">
      <Carousal/>
      <Catagory/>
      <FeaturedProducts/>
    </div>
  );
}