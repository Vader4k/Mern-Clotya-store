import { Link } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

const Error = ({ msg }) => {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center">
      <BiSolidError className="text-red-500"/>
      <h1 className="text-red-500 my-5 text-[1rem] font-semibold">{msg}</h1>

      <Link
        to="/login"
        className="font-bold bg-red-100 p-3 rounded border-blue-600"
      >
        Back to login
      </Link>
    </section>
  )
}

export default Error