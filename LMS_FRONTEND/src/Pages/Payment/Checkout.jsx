import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getRazorpayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../Redux/Slices/RazorpaySlice";
import toast from "react-hot-toast";
import HomeLayout from "../../Layouts/HomeLayout";
import { motion } from "framer-motion";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const razorpaykey = useSelector((state) => state?.razorpay?.key);
  const subscription_id = useSelector(
    (state) => state?.razorpay?.subscription_id
  );
  const isPaymentVerified = useSelector(
    (state) => state?.razorpay?.isPaymentVerified
  );
  const userData = useSelector((state) => state?.auth?.data);

  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };

  async function handleSubscription(e) {
    e.preventDefault();

    // Validate Razorpay key and subscription ID
    if (!razorpaykey || !subscription_id) {
      toast.error("Something went wrong, Razorpay data not loaded properly.");
      return;
    }

    const options = {
      key: razorpaykey,
      subscription_id: subscription_id,
      name: "Dheeraj lms Pvt. Ltd.",
      description: "Subscription",
      theme: {
        color: "#0047AB",
      },
      prefill: {
        email: userData.email,
        name: userData.fullName,
      },
      handler: async function (response) {
        try {
          if (
            !response.razorpay_payment_id ||
            !response.razorpay_signature ||
            !response.razorpay_subscription_id
          ) {
            toast.error("Payment response missing required fields.");
            return;
          }

          paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
          paymentDetails.razorpay_signature = response.razorpay_signature;
          paymentDetails.razorpay_subscription_id =
            response.razorpay_subscription_id;

          toast.success("Payment successful🙂");

          await dispatch(verifyUserPayment(paymentDetails));

          if (isPaymentVerified) {
            navigate("/checkout/success");
          } else {
            navigate("/checkout/fail");
          }
        } catch (error) {
          toast.error("Payment verification failed. Please try again.");
          console.error("Error verifying payment:", error);
          navigate("/checkout/fail");
        }
      },
      modal: {
        ondismiss: function () {
          toast.error("Payment window dismissed.");
        },
      },
    };

    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      toast.error("Error opening payment window.");
      console.error("Error opening Razorpay:", error);
    }
  }

  async function load() {
    await dispatch(getRazorpayId());
    await dispatch(purchaseCourseBundle());
  }

  useEffect(() => {
    load();
  }, []);
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <HomeLayout>
      <form
        onSubmit={handleSubscription}
        className="min-h-[90vh] py-10 px-4 sm:px-8 md:px-20 flex items-center justify-center bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300"
      >
        <motion.div
          className="flex flex-col gap-4 border-2 border-[#0e1c30] rounded-lg p-4 sm:p-6 cursor-pointer w-full sm:w-[250px] md:w-[350px] dark:border-[#4a5568] dark:bg-[#2d3748] dark:text-white"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: false }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Subscription
          </h3>
          <p className="font-light text-gray-500 sm:text-sm dark:text-gray-400">
          This purchase will allow you to access all available courses on
          our platform for 1 year existing and newly launched courses will be available.
          </p>
          <div className="flex justify-center items-baseline my-6">
            <span className="mr-2 text-4xl font-bold">₹100.00</span>
            <span className="text-gray-500 dark:text-gray-400">/year</span>
          </div>
          <ul className="space-y-3 text-left text-gray-900 dark:text-white">
            {[
              "100% refund on cancellation",
              "Terms and conditions apply",
              "Standard customer support",
              "Access to 100+ courses",
              "Basic analytics and reports",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="bg-neutral-900 text-white hover:bg-black focus:ring-1 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:text-neutral-900 dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Buy Now
          </button>
          
        </motion.div>
      </form>
      
 
    </HomeLayout>
  );
}

export default Checkout;
