import { useState, useEffect } from "react";
import { makePutRequest, getCookie, errorMsg, successMsg } from "../../hooks";

const Billing = ({ userData }) => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (userData) {
      setBillingInfo({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        street: userData.address?.street || "",
        city: userData.address?.city || "",
        state: userData.address?.state || "",
        zip: userData.address?.zip || "",
        phone: userData.phone || "",
      });
    }
  }, [userData]);

  useEffect(() => {
    validateForm();
  }, [billingInfo]);

  const handleInputChange = (e) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { firstName, lastName, street, city, state, zip, phone } = billingInfo;
    if (
      firstName.trim() &&
      lastName.trim() &&
      street.trim() &&
      city.trim() &&
      state.trim() &&
      zip.trim() &&
      phone.trim().length === 11
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return errorMsg("Please fill in all the required fields correctly.");
    }
    try {
      const response = await makePutRequest(
        "/billingInfo",
        billingInfo,
        getCookie("auth_token")
      );
      if (response.error) {
        errorMsg(response.error.message);
      } else {
        successMsg(response.data.message);
      }
    } catch (error) {
      console.error(error);
      errorMsg("Failed to update billing info");
    }
  };

  return (
    <div>
      <h1 className="font-medium">Billing address</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 my-3 text-[0.9rem] items-start"
      >
        <div className="flex flex-col w-full gap-3">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="outline-none border p-2"
            value={billingInfo.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="outline-none border p-2"
            value={billingInfo.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label htmlFor="street">Street address</label>
          <input
            type="text"
            id="street"
            name="street"
            className="outline-none border p-2"
            required
            value={billingInfo.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label htmlFor="city">Town / City</label>
          <input
            type="text"
            id="city"
            name="city"
            className="outline-none border p-2"
            value={billingInfo.city}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            className="outline-none border p-2"
            value={billingInfo.state}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label htmlFor="zip">Zip Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            className="outline-none border p-2"
            value={billingInfo.zip}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="outline-none border p-2"
            value={billingInfo.phone}
            onChange={handleInputChange}
            required
            pattern="\d{11}"
            title="Please enter an 11-digit phone number"
          />
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className="p-3 my-3 bg-red-500 text-white"
        >
          Save address
        </button>
      </form>
    </div>
  );
};

export default Billing;
