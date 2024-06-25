import { Link } from "react-router-dom";
import { useState } from "react";
import { IoStar } from "react-icons/io5";

const Card = ({props}) => {

  
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
      className="relative w-[350px]"
    >
      <Link to={`product/${props.id}`}>
        <img
          onMouseOver={(event) => handleHover(props.id, event)}
          className="w-[350px]" 
          src={props[`img${activeImageIndices[props.id] || 1}`]} 
          alt={`product-${props.name}`} 
        />
      </Link>
      <div className="py-2 flex flex-col gap-3">
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
    </div>
  )
}

export default Card