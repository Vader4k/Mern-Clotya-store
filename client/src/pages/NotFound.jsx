
import { Link } from 'react-router-dom'
import { Headtags } from '../components'

const NotFound = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center h-full min-h-[100vh] px-6'>
      <Headtags pageTitle="Page Not Found"/>
      <h1 className='text-[5rem] md:text-[14rem] font-bold'>404</h1>
      <div className="flex flex-col items-center gap-3 w-full mx-auto max-w-[500px] p-3 text-center">
        <h1 className="text-[1.5rem] md:text-[3rem]">Page Not Found</h1>
        <p className="text-[0.9rem]">It looks like nothing was found at this location. Maybe try to search for what you are looking for?</p>
        <Link to='/'>
          <button className="p-3 mt-5 text-white bg-red-500">Go To Homepage</button>
        </Link>
      </div>
    </section>
  )
}

export default NotFound