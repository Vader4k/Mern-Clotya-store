import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomInMap } from "react-icons/md";
import { PiSwapLight } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";

const ListView = ({ props }) => {

    const [activeImageIndices, setActiveImageIndices] = useState({});

    const handleHover = (id, event) => {
        const container = event.currentTarget;
        const xPosition = event.clientX - container.getBoundingClientRect().left;
        const percentage = (xPosition / container.clientWidth) * 100;
    
        let newIndex = 1; // Default to img1
    
        if (percentage > 25 && percentage <= 50) {
          newIndex = 2;
        } else if (percentage > 50 && percentage <= 75) {
          newIndex = 3;
        } else if (percentage > 75) {
          newIndex = 4;
        }
    
        setActiveImageIndices((prev) => ({ ...prev, [id]: newIndex }));
      };


  return (
    <section className="w-full">
        <div className="relative gap-8 flex items-start w-full border-b pb-4 my-4 card">
            <Link to={`/product/${props.id}`}>
                <img
                onMouseOver={(event) => handleHover(props.id, event)}
                className="w-full lg:max-w-[350px]" 
                src={props[`img${activeImageIndices[props.id] || 1}`]} 
                alt={`product-${props.name}`} 
                />
            </Link>
            <div className="w-full flex flex-col gap-4 items-start">
                <div className="flex items-center gap-1">
                    <MdOutlineStarPurple500 className="text-yellow-400"/>
                    <span className="text-[0.9rem]">{props.reviews} reviews</span>
                </div>
                <h1 className="text-[1.3rem] capitalize">{props.name}</h1>
                <div className="text-[0.9rem] md:text-[1rem] flex items-center gap-2">
                    { props.old_price && <span className="line-through text-gray-400">${props.old_price}</span>}
                    <span>${props.new_price}</span>
                </div>
                <p className="text-gray-500 text-[0.95rem]">{props.info}</p>
                <hr className="w-full border my-3"/>
                <Link to={`/product/${props.id}`}>
                    <button className="px-8 text-white py-3 font-medium text-[0.9rem] bg-red-500">Select options</button>
                </Link>
                <div className="flex flex-col gap-2 mt-3">
                    <div className="uppercase text-[0.9rem]"><span className="text-gray-400">SKU: </span>{props.SKU}</div>
                    <div className="flex items-center gap-1 text-[0.9rem]">
                        <span className="text-gray-400">Categories: </span>
                        {props.category.map((cat) => (
                            <span className="text-[0.8rem] font-medium uppercase flex gap-2" key={cat.id}>{cat.name},</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute top-2 left-2 md:hidden activities">
                <div className="flex flex-col gap-3 md:text-[1.2rem] text-gray-600">
                <div className="p-2 rounded-full bg-white hover:bg-red-400 hover:text-white transition-all">
                    <CiHeart />
                </div>
                <div className="p-2 rounded-full bg-white hover:bg-red-400 hover:text-white transition-all">
                    <MdOutlineZoomInMap />
                </div>
                <div className="p-2 rounded-full bg-white hover:bg-red-400 hover:text-white transition-all">
                    <PiSwapLight />
                </div>
                <div className="p-2 rounded-full bg-white hover:bg-red-400 hover:text-white transition-all">
                    <IoBagOutline />
                </div>
                </div>
          </div>
        </div>
    </section>
  )
}

export default ListView