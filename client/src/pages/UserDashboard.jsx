import { Headtags } from "../components"
import { useSelector } from 'react-redux'
import {
  selectError,
  selectUserData,
  selectLoading,
} from '../app/userSlice'
//create a loader page
//create a error page
import { useEffect } from "react"
import { fetchUserData } from "../app/userThunks"
import { useDispatch } from "react-redux"
import { useUserContext } from '../context/UserContext'
import { removeCookie } from "../hooks"
import { useNavigate } from "react-router-dom"

const UserDashboard = () => {

  const { setUserContext } = useUserContext()
  const userApiData = useSelector(selectUserData)?.data?.data
  const isUserDataLoading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  //fetching the user data in redux after getting acess token from cookie
  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch])

  //if there is an error or loading state, display the error message or loader
  const handleError =() => {
    if(error.status == 400) {
      removeCookie("access_token");
      window.location.href = '/profile'
    }
    return <div>{error}</div>
  }

  //checks if userData is successfully fetched from the fetchUserData function in redux and then set the data in the userContext api
  useEffect(() => {
    if(userApiData){
      setUserContext(userApiData)
    }
  },[userApiData, setUserContext])

  useEffect(() => {
    const handleRedirect = () => {
      if(userApiData && userApiData.role === 'admin') {
        navigate('/admin')
        return null
      }
    }
    handleRedirect()
  },[userApiData])

  if(isUserDataLoading) return <div>Loading...</div>
  if(error) return handleError()

  return (
    <section className="w-full max-w-[1300px] mx-auto px-3 py-20">
      <Headtags pageTitle="My Account" />
      {/* User dashboard content */}
      <div className="w-full flex items-start gap-5">
        <div className="flex-1 w-full">

        </div>
        {/* dashboard components */}
        <div className="flex-[3] w-full">

        </div>
      </div>
    </section>
  )
}

export default UserDashboard