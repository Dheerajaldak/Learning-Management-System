import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosinstance";

// Initial state setup
const initialState = {
    allUsersCount: 0,
    subscribedCount: 0,  // If you plan to use this, handle it in the API.
    loading: false,
    error: null,
};

// Asynchronous thunk to fetch stats data
export const getStatsData = createAsyncThunk(
    "stats/get", 
    async (_, { rejectWithValue }) => {
        try {
            const statsRequest = axiosInstance.get("/admin/stats/users");

            // Pass the Axios call (Promise) directly to toast.promise
            const response = await toast.promise(statsRequest, {
                loading: "Getting the stats...",
                success: () => `Stats loaded successfully!`,
                error: () => "Failed to load data stats",
            });

            // Return the response data
            return response.data;
        } catch (error) {
            // Handle error in case the Promise is rejected
            if (error?.response) {
                toast.error(error?.response?.data?.message || "Something went wrong");
            } else {
                toast.error("Network error or server is down");
            }
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);


// Slice definition
const statSlice = createSlice({
    name: "stat",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStatsData.pending, (state) => {
                state.loading = true;  // Set loading to true
                state.error = null;    // Clear previous errors
            })
            .addCase(getStatsData.fulfilled, (state, action) => {
                state.loading = false;
                state.allUsersCount = action.payload?.totalUserCount || 0;  // Handle totalUserCount in API response
                state.subscribedCount = action.payload?.subscribedUsersCount || 0;  // If your API provides this data
            })
            .addCase(getStatsData.rejected, (state, action) => {
                state.loading = false;  // Set loading to false on error
                state.error = action.payload || "Failed to load stats";  // Store the error message
            });
    },
});

export default statSlice.reducer;
