import { IoMdClose } from "react-icons/io";
import SideControls from "./SideControls";

const FilterModal = ({ onClose, handleFilterChange }) => {
  return (
    <div className="scrollable relative bg-white z-[999] p-4 h-full w-[70%] overflow-y-scroll">
      <div className="p-3">
        <div className="flex items-center justify-between pb-6 border-b">
          <h1>Filter Products</h1>
          <button className="p-2 rounded-full border">
            <IoMdClose className="cursor-pointer text-[1.2rem]" onClick={onClose} />
          </button>
        </div>
        <div>
          <SideControls onFilterChange={handleFilterChange}/>
        </div>
      </div>
    </div>
  )
}

export default FilterModal