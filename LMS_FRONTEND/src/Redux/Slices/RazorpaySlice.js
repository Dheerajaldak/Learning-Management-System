import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosinstance";
import toast from "react-hot-toast";

const initialState = {
  key: "",
  subscription_id: "",
  isPaymentVerified: false,
  allPayments: {},
  finalMonths: {},
  monthlySalesRecord: [],
};

export const getRazorpayId = createAsyncThunk("/razorpay/getId", async () => {
    try {
      const response = await axiosInstance.get("/payments/razorpay-key");
      return response.data;
    } catch (error) {
      toast.error("Failed to load data");
      throw error; // Ensure error propagation for any rejected state
    }
  }
);

export const purchaseCourseBundle = createAsyncThunk("/purchaseCourse", async () => {
    try {
      const response = await axiosInstance.post("/payments/subscribe");
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Subscription failed.");
      throw error;
    }
  }
);

export const verifyUserPayment = createAsyncThunk("/payments/verify",async (data) => {
    try {
      const response = await axiosInstance.post("/payments/verify", {
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_subscription_id: data.razorpay_subscription_id,
        razorpay_signature: data.razorpay_signature,
      });
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Payment verification failed.");
      throw error;
    }
  }
);


export const getPaymentRecord = createAsyncThunk(
  "/payments/record",
  async () => {
    try {
      const response = axiosInstance.get("/payments?count=100");
      toast.promise(response,{
        loading: "Getting the payment records",
        success: (data)=>{
          return data?.data?.message
        },
        error: "Failed to get payement records"
      })
      return (await response).data;
    } catch (error) {
      toast.error("Failed to fetch payment records.");
      throw error;
    }
  }
);

export const cancelCourseBundle = createAsyncThunk(
  "/payments/cancel",
  async () => {
    try {
      const response = axiosInstance.post("/payments/unsubscribe");
      toast.promise(response,{
        loading: "Unsubscribing the bundle",
        success: (data)=>{
          return data?.data?.message
        },
        error: "Failed to unsubscribe"
      })
      return (await response).data;
    } catch (error) {
      toast.error("Operation failed");
      throw error;
    }
  }
);
const razorpaySlice = createSlice({
  name: "razorpay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRazorpayId.fulfilled, (state, action) => {
        state.key = action?.payload?.key;
      })
      .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
        toast.success(action?.payload?.message);
        state.subscription_id = action?.payload?.subscription_id;
      })
      .addCase(verifyUserPayment.fulfilled, (state, action) => {
        toast.success(action?.payload?.message);
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(verifyUserPayment.rejected, (state, action) => {
        toast.error(action?.error?.message || "Verification failed.");
        state.isPaymentVerified = false;
      })
      .addCase(getPaymentRecord.fulfilled, (state, action) => {
        state.allPayments = action?.payload?.allPayments;
        state.finalMonths = action?.payload?.finalMonths;
        state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
      })
  },
});

export default razorpaySlice.reducer;