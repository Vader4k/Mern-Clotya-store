import { blogItems } from "../constants/products"
import { Link } from "react-router-dom"

const Blog = () => {
  return (
    <section className="px-3">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-[1.5rem] md:text-[2rem] font-medium">Our Latest News</h1>
        <p className="font-light text-gray-500 leading-6 max-w-[800px] my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga, perspiciatis quaerat ut nam vel iusto natus corrupti totam odit ad pariatur voluptates quibusdam expedita!</p>
      </div>

      <div className="py-5 w-full">
        <div className="flex flex-col w-full lg:flex-row items-center justify-between gap-6">
          {blogItems.map((items) => (
            <div key={items.id} className="flex flex-col gap-2 w-full">
              <Link to={`/blog/${items.id}`}>
                <img className="min-h-[300px] max-h-[500px] w-full lg:w-[500px] object-cover" src={items.image} alt={items.name + 'image'} />
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 font-medium uppercase text-[0.85rem]">{items.tag}</span> --
                <span className="text-gray-500 text-[0.85rem]">{items.date}</span>
              </div>
              <h1 className="text-[1.3rem] font-medium">{items.name}</h1>
              <p className="text-[0.9rem] text-gray-600">{items.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog