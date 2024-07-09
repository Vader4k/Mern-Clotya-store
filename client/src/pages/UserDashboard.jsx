import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../app/userThunks";
import { getCookie, removeCookie } from "../hooks";
import { selectUserData, selectRefresh, selectError } from "../app/userSlice";
import { Error, Headtags, Refresher } from "../components";
import Dashboard from "../components/UserDashboard/Dashboard";
import Orders from "../components/UserDashboard/Orders";
import Address from "../components/UserDashboard/Address";
import Details from "../components/UserDashboard/Details";
import Billing from "../components/UserDashboard/Billing";
import View from "../components/UserDashboard/View";
import Sidebar from "../components/UserDashboard/Sidebar";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userApiData = useSelector(selectUserData)?.data.data;
  const isRefresh = useSelector(selectRefresh);
  const error = useSelector(selectError);
  const token = getCookie("auth_token");
  const [tab, setTab] = useState("dashboard");
  const [id, setId] = useState("");
  const [order, setOrder] = useState({});

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    } else {
      navigate("/login");
    }
  }, [dispatch, token, navigate]);

  useEffect(() => {
    if (userApiData && userApiData.role === "admin") {
      navigate("/admin");
      return null;
    }
  }, [userApiData, navigate]);

  const handleError = () => {
    if (error.status === 401) {
      removeCookie("auth_token");
      navigate("/login");
      return null;
    }
    return <Error msg={error.error} />;
  };

  if (isRefresh) {
    return <Refresher />;
  }

  if (error) {
    return handleError();
  }

  const handleLogOut = () => {
    removeCookie("auth_token");
    navigate("/login");
    window.location.reload();
  };

  const tabs = {
    dashboard: <Dashboard setTab={setTab} userData={userApiData} logout={handleLogOut} />,
    orders: <Orders userData={userApiData} setTab={setTab} setId={setId} setOrder={setOrder} />,
    address: <Address userData={userApiData} setBilling={() => setTab("billing")} />,
    details: <Details userData={userApiData} />,
    billing: <Billing userData={userApiData} />,
    view: <View userData={userApiData} id={id} order={order} />,
  };

  return (
    <section className="w-full max-w-[1300px] mx-auto px-3 py-10">
      <Headtags pageTitle="My Account" />
      <div className="w-full flex flex-col-reverse md:flex-row items-start gap-10 md:gap-5">
        <Sidebar userApiData={userApiData} tab={tab} setTab={setTab} handleLogOut={handleLogOut} />
        <div className="flex-[3] w-full p-3">{tabs[tab]}</div>
      </div>
    </section>
  );
};

export default UserDashboard;
