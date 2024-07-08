import { useState, useEffect, useContext } from "react";
import { IoStar } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import { ShopContext } from "../context/ShopContext";

const Details = ({ props }) => {
  const [activeImage, setActiveImage] = useState(props.img1);
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { addToCart, addToWishlist } = useContext(ShopContext);

  const images = [props.img1, props.img2, props.img3, props.img4].filter(Boolean);

  const add = () => {
    setQuantity((prev) => prev + 1);
  };

  const subtract = () => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  };

  useEffect(() => {
    setActiveImage(props.img1);
  }, [props]);

  const handleAddToCart = () => {
    if (!isSizeSelected || !isColorSelected) {
      alert('Please select a size and color');
      return;
    }
    addToCart(props.id, selectedSize, selectedColor, quantity);
    setSelectedColor('')
    setSelectedSize('')
    setIsColorSelected(false)
    setIsSizeSelected(false)
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <img className="h-[700px] object-cover w-[500px]" src={activeImage} alt={props.name} />
          </div>
          <div className="flex items-center gap-4 h-[70px]">
            {images.map((img, index) => (
              <img 
                key={index} 
                onClick={() => setActiveImage(img)} 
                className={`object-cover h-full w-[70px] cursor-pointer p-1 ${activeImage === img ? 'border border-black' : ''}`} 
                src={img} 
                alt={`${props.name} ${index + 1}`} 
              />
            ))}
          </div>
        </div>
        {/* details */}
        <div className="max-w-[500px] flex flex-col gap-4">
          <h1 className="capitalize text-[1.5rem]">{props.name}</h1>
          <div className="flex gap-2">
            <div className="flex gap-0 items-center">
              {...Array(5).fill(1).map((_, index) => (
                <IoStar key={index} className="text-yellow-300 text-[0.8rem]" />
              ))}
            </div>
            <span className="text-[0.9rem]">{props.reviews} review</span>
          </div>
          <div className="flex gap-2 items-center">
            {props.old_price && <span className="line-through text-gray-400 text-[1.3rem]">${props.old_price}</span>}
            <span className="font-medium text-[1.3rem]">${props.new_price}</span>
          </div>
          <p className="text-[0.85rem]">{props.info}</p>
          <div className="flex flex-col gap-3 my-2">
            <span>Color: {selectedColor}</span>
            {props?.colors && (
              <div className="flex gap-3 flex-wrap items-center max-w-[600px]">
                {props.colors.map((val, i) => (
                  <button
                    onClick={() => {
                      setIsColorSelected(true);
                      setSelectedColor(val.name);
                    }} 
                    className={`w-[35px] text-[0.9rem] h-[35px] rounded-full border uppercase flex items-center justify-center ${selectedColor === val.name ? 'border-black border-2' : ''}`}
                    style={{ backgroundColor: `${val.name}` }} 
                    key={i}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <span>Size: {selectedSize}</span>
            {props?.size && (
              <div className="flex gap-2 flex-wrap items-center max-w-[600px]">
                {props.size.map((val, i) => (
                  <button 
                    onClick={() => {
                      setIsSizeSelected(true);
                      setSelectedSize(val.name);
                    }} 
                    className={`w-[65px] text-[0.9rem] h-[30px] border uppercase flex items-center justify-center ${selectedSize === val.name ? 'bg-red-500 text-white' : ''}`} 
                    key={i}>
                    {val.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            {(isSizeSelected || isColorSelected) && (
              <div className="flex flex-col gap-2 items-start">
                <button
                  onClick={() => {
                    setIsSizeSelected(false);
                    setIsColorSelected(false);
                    setSelectedSize('');
                    setSelectedColor('');
                  }}
                >
                  <span className="font-medium text-[1rem]">X</span> Clear
                </button>
                <div className="bg-green-200 px-4 p-1 max-w-[90px] font-medium text-green-600">
                  In Stock
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex w-full max-w-[110px] items-center gap-6 border p-3">
              <button onClick={subtract} className="font-medium">-</button>
              <span>{quantity}</span>
              <button onClick={add} className="font-medium">+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white font-medium p-3 hover:bg-gray-500 text-center">
              Add to cart
            </button>
          </div>
          <div className="flex items-center gap-3 pt-3 pb-6 w-full border-b">
            <button className="flex items-center gap-1 text-[0.9rem]">
              <TfiWorld className="text-[1.1rem] text-gray-400"/>
              <span>Size Guide</span>
            </button>
            <button
              onClick={()=> addToWishlist(props.id)} 
              className="flex items-center gap-1 text-[0.9rem]">
              <GoHeart className="text-[1.1rem] text-gray-400"/>
              <span>Add to Wishlist</span>
            </button>
            <button className="flex items-center gap-1 text-[0.9rem]">
              <CiShare1 className="text-[1.1rem] text-gray-400"/>
              <span>Share this Product</span>
            </button>
          </div>
          <div className="uppercase text-[0.9rem]"><span className="text-gray-400">SKU: </span>{props.SKU}</div>
          <div className="flex items-center gap-1 text-[0.9rem]">
            <span className="text-gray-400">Categories: </span>
            {props.category.map((cat) => (
              <span className="text-[0.8rem] font-medium uppercase flex gap-2" key={cat.id}>{cat.name},</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
