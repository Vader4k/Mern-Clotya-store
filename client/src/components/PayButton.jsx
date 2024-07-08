import { useContext, useEffect } from 'react';
import { makePostRequest, successMsg, errorMsg, getCookie } from '../hooks';
import { ShopContext } from '../context/ShopContext';

const PayButton = ({ subtotal }) => {
    const { user, fetchUserData } = useContext(ShopContext);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePaystackSuccessAction = async (reference) => {
        try {
            const response = await makePostRequest('/verify-payment', {
                reference: reference.reference,
                subtotal 
            }, getCookie("auth_token"));

            if (response.data.success === true) {
                successMsg(response.data.message);
                fetchUserData()
            } else {
                errorMsg(response.data.message);
            }
        } catch (error) {
            errorMsg('An error occurred while verifying payment');
        }
    }

    const handlePaystackCloseAction = () => {
        errorMsg('Transaction was not completed, window closed.');
    };

    const handlePaystackPayment = () => {
        const handler = window.PaystackPop.setup({
            key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
            email: user.email,
            amount: parseInt(subtotal * 100), // Convert to kobo (smallest currency unit)
            currency: 'NGN',
            ref: `PS_${Math.floor(Math.random() * 1000000000 + 1)}`, // Generate a random reference
            callback: (response) => handlePaystackSuccessAction(response),
            onClose: handlePaystackCloseAction
        });
        handler.openIframe();
    }

    return (
        <button onClick={handlePaystackPayment} className="p-3 bg-red-500 text-white w-full">
            Continue to checkout
        </button>
    );
}

export default PayButton;
