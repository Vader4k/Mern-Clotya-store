import logo from '../assets/logo.png'
import { FiLoader } from "react-icons/fi";

const Refresher = () => {
  return (
    <div className="w-[100vw] h-[100vh] gap-20 flex flex-col items-center justify-center">
        <picture className="flex flex-col items-center">
        <img className="w-[40px]" src={logo} alt="spinner" />
        </picture>
        <FiLoader className="animate-spin text-3xl" />
  </div>
  )
}

export default Refresher