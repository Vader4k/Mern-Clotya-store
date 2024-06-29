import { getCookie, removeCookie } from "../hooks"
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  let auth = {access_token: getCookie("access_token")}
  if (!auth.access_token) {
    removeCookie("access_token");
    console.log("unsetting cookie...")
  }

  return auth.access_token ? <Outlet /> : <Navigate to='/login'/>

export default ProtectedRoutes