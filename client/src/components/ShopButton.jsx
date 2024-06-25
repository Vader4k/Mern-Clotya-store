import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ShopButton = ({style, text}) => {
  return (
    <Link to='/shop'>
      <button className={`${style ? 'text-black' : 'text-white'} flex items-center gap-3 font-medium text-[1rem]`}>
        <span>{text ? text : "Shop Collection"}</span>
        <HiArrowLongRight />
      </button>
    </Link>
  )
} 

export default ShopButton