import { Link } from "react-router-dom"

const Breadcrums = ({ props }) => {
  return (
    <div className="flex gap-2 my-5 text-gray-500 text-[0.9rem]">
      <Link to="/">Home</Link> /
      {props.category.map((item) => (
        <Link key={item.id} to={`/shop`}>{item.name} /</Link>
      ))}
      <span className="text-black capitalize">{props.name}</span>
    </div>
  )
}

export default Breadcrums