import { Error, Headtags, Refresher } from "../components";
import { useEffect } from "react";
import { fetchUserData } from "../app/userThunks";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, removeCookie } from "../hooks";
import { useNavigate } from "react-router-dom";
import { selectUserData, selectRefresh, selectError } from "../app/userSlice";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userApiData = useSelector(selectUserData)?.data.data;
  const isRefresh = useSelector(selectRefresh);
  const error = useSelector(selectError);
  const token = getCookie("auth_token");

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    } else {
      // Redirect to login
      navigate('/profile');
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
      removeCookie("access_token");
      navigate('/profile'); // Redirect to login after token expired
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


  return (
    <section className="w-full max-w-[1300px] mx-auto px-3 py-20">
      <Headtags pageTitle="My Account" />
      <div className="w-full flex items-start gap-5">
        <div className="flex-1 flex flex-col w-full px-4 py-2 border border-gray-300 shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-gray-200">
              {userApiData?.username.substring(0,2).toUpperCase()}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.6rem] text-gray-400">Welcome back,</span>
              <p className="text-[0.8rem]">{userApiData?.username}</p>
            </div>
          </div>
        </div>
        <div className="flex-[3] w-full">
          {/* dashboard components */}
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
