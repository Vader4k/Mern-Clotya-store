
const CategoryButton = ({ name, active, setActive, filterProducts }) => (
    <button
      className={active === name ? "text-black capitalize" : "text-gray-400 hover:text-black transition-all capitalize"}
      onClick={() => {
        setActive(name);
        filterProducts(name);
      }}
    >
      {name}
    </button>
  );
  
  export default CategoryButton;
  