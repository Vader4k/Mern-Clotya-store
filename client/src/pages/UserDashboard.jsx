import { Error, Headtags, Refresher } from "../components";
import { useEffect, useState } from "react";
import { fetchUserData } from "../app/userThunks";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, removeCookie } from "../hooks";
import { useNavigate } from "react-router-dom";
import { selectUserData, selectRefresh, selectError } from "../app/userSlice";
import Dashboard from '../components/UserDashboard/Dashboard'
import Orders from '../components/UserDashboard/Orders'
import Address from '../components/UserDashboard/Address'
import Wishlist from '../components/UserDashboard/Wishlist'
import Details from "../components/UserDashboard/Details";
import Billing from '../components/UserDashboard/Billing'


const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userApiData = useSelector(selectUserData)?.data.data;
  const isRefresh = useSelector(selectRefresh);
  const error = useSelector(selectError);
  const token = getCookie("auth_token");
  const [tab, setTab] = useState("dashboard")

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    } else {
      // Redirect to login
      navigate('/login');
    }
  }, [dispatch, token, navigate]);

  useEffect(()=> {
    if(userApiData && userApiData.role === 'admin'){
      navigate('/admin'); // Redirect to admin dashboard if user is admin
      return null
    }
  },[userApiData, navigate])

  const handleError = () => {
    if(error.status === 401) {
      removeCookie("auth_token");
      navigate('/login'); // Redirect to login after token expired
      return null
    }
    return <Error msg={error.error} />;
  }

  if (isRefresh){
    return <Refresher />
  }

  if(error){
    return handleError()
  }

  const handleLogOut = () => {
    removeCookie("auth_token");
    dispatch(fetchUserData())
    navigate('/'); // Redirect to login after logout
  }


  return (
    <section className="w-full max-w-[1300px] mx-auto px-3 py-10">
      <Headtags pageTitle="My Account" />
      <div className="w-full flex items-start gap-5">
        <div className="flex-1 flex flex-col w-full py-2 border border-gray-300 shadow-md">
          <div className="flex items-center gap-4 w-full px-4 mb-3">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-gray-200">
              {userApiData?.username.substring(0,2).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-[0.6rem] text-gray-400">Welcome back,</span>
              <p className="text-[0.8rem] font-medium">{userApiData?.username}</p>
            </div>
          </div>

          <div 
            onClick={()=> setTab("dashboard")}
            className={`${tab === 'dashboard' ? 'bg-red-500 text-white border-none' : 'bg-white text-black border'} w-full cursor-pointer p-3`}>
            Dashboard
          </div>
          <div
            onClick={()=> setTab("orders")} 
            className={`${tab === 'orders' ? 'bg-red-500 text-white border-none' : 'bg-white text-black border'} w-full cursor-pointer p-3`}>
            Orders
          </div>
          <div
            onClick={()=> setTab("address")} 
            className={`${tab === 'address' || tab === 'billing' ? 'bg-red-500 text-white border-none' : 'bg-white text-black border'} w-full cursor-pointer p-3`}>
            Addresses
          </div>
          <div
            onClick={()=> setTab("details")} 
            className={`${tab === 'details' ? 'bg-red-500 text-white border-none' : 'bg-white text-black border'} w-full cursor-pointer p-3`}>
            Account details
          </div>
          <div
            onClick={()=> setTab("wishlist")} 
            className={`${tab === 'wishlist' ? 'bg-red-500 text-white border-none' : 'bg-white text-black border'} w-full cursor-pointer p-3`}>
            Wishlist
          </div>
          <div onClick={handleLogOut} className="w-full cursor-pointer p-3">
            Log out
          </div>
        </div>
        <div className="flex-[3] w-full p-3">
          {/* dashboard components */}
          {tab === 'dashboard' && (
            <div>
              <Dashboard 
                setTab={setTab} 
                userData={userApiData} 
                logout={handleLogOut}
              />
            </div>
          )}
          {tab === 'orders' && (
            <div>
              <Orders
                userData={userApiData} 
              />
            </div>
          )}
          {tab === 'address' && (
            <div>
              <Address
                userData={userApiData} 
                setBilling={()=> setTab('billing')}
              />
            </div>
          )}
          {tab === 'details' && (
            <div>
              <Details
                userData={userApiData} 
              />
            </div>
          )}
          {tab === 'wishlist' && (
            <div>
              <Wishlist
                userData={userApiData} 
              />
            </div>
          )}
          {tab === 'billing' && (
            <div>
              <Billing
                userData={userApiData}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
