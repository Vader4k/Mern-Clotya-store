import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ShopButton = () => {
  return (
    <Link to='/shop'>
      <button className="flex items-center gap-3 font-medium text-white text-[1rem]">
        <span>Shop Collection</span>
        <HiArrowLongRight />
      </button>
    </Link>
  )
} 

export default ShopButton