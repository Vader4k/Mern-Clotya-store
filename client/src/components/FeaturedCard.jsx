import { Link } from "react-router-dom";
import { useState } from "react";
import { IoStar } from "react-icons/io5";

const FeaturedCard = ({props}) => {
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
    <div
      className="relative w-full max-w-[500px] my-16"
    >
      <Link to={`product/${props.id}`}>
        <img
          onMouseOver={(event) => handleHover(props.id, event)}
          className="w-full max-w-[500px]" 
          src={props[`img${activeImageIndices[props.id] || 1}`]} 
          alt={`product-${props.name}`} 
        />
      </Link>
      <div className="absolute left-[22px] bottom-[-50px] bg-white w-[350px] px-6 py-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-[0.85rem]">
          <IoStar className="text-yellow-500"/>
          <span>{props.reviews} review</span>
        </div>
        <p>{props.name}</p>
        <div className="flex items-center gap-2">
          { props.old_price && <span className="line-through text-gray-400">${props.old_price}</span>}
          <span>${props.new_price}</span>
        </div>
      </div>
      {props.tag && (
        <div className={`absolute left-2 top-2 text-[0.8rem] px-3 py-1 bg-white ${props.tag.length < 5 ? 'text-green-500 font-bold' : 'text-gray-500'}`}>
          {props.tag}
        </div>)
      }
      <div className="absolute">
        <div className="flex flex-col gap-3">

        </div>
      </div>
    </div>
  )
}

export default FeaturedCard