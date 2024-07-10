import { useState, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { ShopContext } from "../context/ShopContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

const Search = ({ onClose }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const { allProducts } = useContext(ShopContext);


  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setLoading(true);
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResult(filteredProducts);
    setLoading(false);
  };


  return (
    <div className="w-full fixed top-0 bg-white max-w-[1300px] z-[99] mx-auto px-6 h-full min-h-screen py-10">
      <div className="flex items-center justify-between text-[0.95rem] mt-10">
        <h1>What are you looking for?</h1>
        <IoMdClose className="text-[1rem] font-bold cursor-pointer" onClick={onClose} />
      </div>
      <div className="w-full mt-10 relative">
        <input
          type="text"
          name="search"
          placeholder="Search your favorite product..."
          className="w-full text-[0.9rem] border-b p-2 outline-none border-gray-400"
          onChange={handleSearch}
        />
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin text-[0.9rem] absolute right-10 top-[50%] transform -translate-y-[50%]" />
        ) : (
          <BsSearch className="text-[0.9rem] absolute right-10 top-[50%] transform -translate-y-[50%]" />
        )}
      </div>
      <div className="mt-5 p-2 flex flex-col gap-3 border max-h-[200px] overflow-y-scroll">
        {result.length > 0 ? (
          result.map((product) => (
            <Link onClick={onClose} to={`/product/${product.id}`} key={product.id} className="w-full flex items-center text-[0.9rem]">
              <img className="w-[40px] h-[40px] object-contain" src={product.img1} alt={product.name} />
              <p>{product.name}</p>
            </Link>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
