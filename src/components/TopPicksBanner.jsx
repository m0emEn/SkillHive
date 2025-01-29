import discoverImage from "../assets/images/banner.svg";
import Button from "./ui/Button";
const TopPicksBanner = () => (
  <div className="flex justify-between items-center  bg-[#ACD7FF] rounded-2xl p-4 py-8 relative w-1/3">
    <div>
      <p className="text-[#577395] font-semibold">Discover Top Picks</p>
      <p className="text-[#2D4663] font-bold text-3xl">
        +100{" "}
        <span className="text-[#577395] font-semibold text-sm">lessons</span>
      </p>
      <Button text="Explore more" />
    </div>
    <div className="absolute bottom-0 right-0">
      <img src={discoverImage} alt="Discover" />
    </div>
  </div>
);
export default TopPicksBanner;
