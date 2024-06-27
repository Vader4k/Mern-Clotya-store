import { blogItems, blogComments } from '../constants/products'
import { useParams } from 'react-router-dom'
import { Headtags } from '../components'
import { useState } from 'react'
import SearchResults from '../components/SearchResults'
import { CiSearch } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom'

const BlogDetail = () => {

  const [activeTab, setActiveTab] = useState('blog')
  const blogs = blogItems
  const {id} = useParams()

  const blogDetails = blogs.find((item) => item.id === Number(id))

  const collections =[{ id: 1, name: 'Clothing', url: '/' },{ id: 2, name: 'Collection', url: '/' }, { id: 3, name: 'Dresses', url: '/' }, { id: 4, name: 'Fashion', url: '/' }]

  const tags =[
    {
      id:1, name: 'clothing'
    },
    {
      id:2, name: 'fashion'
    },
    {
      id:3, name: 'kibtheme'
    },
    {
      id:4, name: 'products'
    },
    {
      id:5, name: 'store'
    },
    {
      id:6, name: 'e-commerce'
    },
  ]

  return (
    <section className='w-full max-w-[1300px] mx-auto my-20 px-3 md:px-20 lg:px-3 '>
      <Headtags pageTitle={`Blog - ${blogDetails.name}`}/>
      <div className='w-full flex flex-col lg:flex-row items-start relative gap-8'>
        { activeTab === 'blog' && (
          <div className='flex-[3]'>
            <div className='flex flex-col gap-3 w-full border-b pb-20'>
              <img className='w-full' src={blogDetails.image} alt={blogDetails.name} />
              <div className='flex items-center gap-2'>
                <span className='font-medium text-gray-500 text-[0.8rem]'>{blogDetails.tag} --</span>
                <span className='text-[0.8rem] text-gray-500'>{blogDetails.date} --</span>
                <span className='text-[0.85rem]'>products, e-commerce</span>
              </div>
              <h1 className='text-[2rem] font-medium capitalize'>{blogDetails.name}</h1>
              <div className='text-[0.95rem] text-gray-500 flex flex-col gap-5'>
                <p>{blogDetails.paragraph1}</p>
                <p>{blogDetails.paragraph2}</p>
                <p className='p-5 border-r-4 border-l-4 border-gray-400'>{blogDetails.paragraph3}</p>
                <p>{blogDetails.paragraph4}</p>
                <p>{blogDetails.paragraph5}</p>
                <p>{blogDetails.paragraph6}</p>
              </div>
            </div>
            {/* comment section */}
            <div className='my-5 max-w-[800px]'>
              <h1 className='font-medium uppercase'>3 thoughts on "{blogDetails.name}"</h1>
              <div className='mt-6'>
                <div className='flex flex-col gap-5'>
                  {blogComments.map((comment) => (
                    <div className='flex gap-5 items-start' key={comment.id}>
                      <RxAvatar className='text-[8rem] text-gray-500'/>
                      <div className='flex flex-col'>
                        <div className='flex items-center gap-4'>
                          <h1>{comment.name}</h1>
                          <span className='text-[0.8rem]'>{comment.date}</span>
                        </div>
                        <p className='py-3 text-[0.9rem] md:text-[1rem]'>{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'search' && <div className='flex-[3] flex flex-col gap-3 w-full'><SearchResults /></div>}
        {/* stickly side actions */}
        <div className='sticky top-1 flex-1 w-full'>
          <div className='w-full'>
            <div className=' mb-4'>
              <form className='relative w-full'>
                <input 
                  type="text"
                  placeholder='Search...'
                  className='p-2 text-gray-500 text-[0.9rem] w-full border rounded-sm outline-none'
                />
                <CiSearch className='text-gray-700 text-[1.5rem] absolute top-[0.6rem] right-3'/>
              </form>
            </div>
            <h1 className='py-3 font-medium border-b'>Popular Posts</h1>
            <div className='flex flex-col gap-8 my-6'>
              {blogs.map((items) => (
                <div key={items.id}>
                  <Link to={`/blog/${items.id}`}>
                    <div className='flex items-start gap-6'>
                      <img className='h-[80px] w-[80px] object-cover' src={items.image} alt={items.name} />
                      <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-[0.8rem]'>{items.date}</span>
                        <h1 className='text-[1rem] font-medium'>{items.name}</h1>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <h1 className='py-3 font-medium border-b'>Categories</h1>
            <div className='py-6 flex flex-col gap-3'>
              {collections.map((items) => (
                <Link to={items.url} key={items.id}>
                  <div className='flex items-center gap-2'>
                    <FiChevronRight />
                    <span className='text-gray-500 text-[0.8rem]'>{items.name}</span>
                  </div>
                </Link>
              ))}
            </div>
            <h1 className='pb-3 font-medium border-b'>Tags</h1>
            <div className='py-3 flex flex-wrap gap-1'>
              {tags.map((items) => (
                <ul key={items.id} className='px-4 py-2 text-[0.88rem] border'>
                  <li>{items.name}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetail