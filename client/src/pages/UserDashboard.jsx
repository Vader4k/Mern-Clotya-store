import { Headtags } from "../components";
import { BiLoaderAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { fetchUserData } from "../app/userThunks";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../hooks";
import { useNavigate } from "react-router-dom";
import { selectUserData, selectLoading, selectError } from "../app/userSlice";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userApiData = useSelector(selectUserData);
  const isUserDataLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const token = getCookie("auth_token");

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    } else {
      // Redirect to login
      navigate('/auth');
    }
  }, [dispatch, token, navigate]);

  useEffect(() => {
    if (error) {
      if (error.status === 400) {
        navigate('/login');
      }
    }
  }, [error, navigate]);

  if (isUserDataLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="w-full max-w-[1300px] mx-auto px-3 py-20">
      <Headtags pageTitle="My Account" />
      <div className="w-full flex items-start gap-5">
        <div className="flex-1 flex flex-col w-full px-4 py-2">
          <div className="flex items-center">
            <div>
              HELLO {userApiData?.data.data.username}
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
