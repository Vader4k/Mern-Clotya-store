import { Link } from "react-router-dom";

const Sidebar = ({ userApiData, tab, setTab, handleLogOut }) => {
  return (
    <div className="flex-1 flex flex-col w-full py-2 border border-gray-300 shadow-md">
      <div className="flex items-center gap-4 w-full px-4 mb-3">
        <div className="w-[40px] h-[40px] flex items-center justify-center bg-gray-200">
          {userApiData?.username.substring(0, 2).toUpperCase()}
        </div>
        <div className="flex flex-col">
          <span className="text-[0.6rem] text-gray-400">Welcome back,</span>
          <p className="text-[0.8rem] font-medium">{userApiData?.username}</p>
        </div>
      </div>

      {["dashboard", "orders", "address", "details"].map((item) => (
        <div
          key={item}
          onClick={() => setTab(item)}
          className={`${
            tab === item ? "bg-red-500 text-white border-none" : "bg-white text-black border"
          } w-full cursor-pointer p-3`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </div>
      ))}
      
      <Link to="/favorites">
        <div className="w-full border cursor-pointer p-3">Wishlist</div>
      </Link>
      <div onClick={handleLogOut} className="w-full cursor-pointer p-3">
        Log out
      </div>
    </div>
  );
};

export default Sidebar;
