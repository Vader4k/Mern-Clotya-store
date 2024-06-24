import { Link } from "react-router-dom";
import { useState } from "react";

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
      onMouseOver={(event) => handleHover(props.id, event)}
    >
      <Link to={`product/${props.id}`}>
        <img 
          src={props[`img${activeImageIndices[props.id] || 1}`]} 
          alt={`product-${props.name}`} 
        />
      </Link>
      <div>
        <h3>{props.name}</h3>
        <p>{props.old_price}</p>
        <p>{props.new_price}</p>
        <p>{props.tag}</p>
      </div>
    </div>
  )
}

export default Card