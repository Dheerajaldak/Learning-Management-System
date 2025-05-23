import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosinstance";
const initialState = {
    lectures: []
}

export const getCourseLectures = createAsyncThunk("/course/lecture/get", async (cid) => {
    try {
        const response = axiosInstance.get(`/courses/${cid}`);
        toast.promise(response, {
            loading: "Fetching course lectures",
            success: "Lectures fetched successfully",
            error: "Failed to load the lectures"
        });
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

export const addCourseLecture = createAsyncThunk("/course/lecture/add", async (data) => {
    try {
        const formData = new FormData();
        formData.append("lecture", data.lecture);
        formData.append("title", data.title);
        formData.append("description", data.description);

        const response = axiosInstance.post(`/courses/${data.id}`, formData);
        toast.promise(response, {
            loading: "adding course lecture",
            success: "Lecture added successfully",
            error: "Failed to add the lectures"
        });
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});
export const deleteCourseLecture = createAsyncThunk(
    "/course/lecture/delete",
    async (data, { rejectWithValue }) => {
      try {
        // Ensure the full path is correct, assuming axiosInstance already has /api/v1 as base URL
        const response = await axiosInstance.delete(
            `/courses/${data.courseId}/lectures/${data.lectureId}`  // Corrected URL
          );
          
        return response.data; // Return the successful response
      } catch (error) {
        console.error("Error deleting lecture:", error);
        
        // Show error toast
        toast.error(error?.response?.data?.message || "An error occurred while deleting the lecture.");
        
        // Reject with error message
        return rejectWithValue(error?.response?.data || { message: "An unknown error occurred" });
      }
    }
  );

const lectureSlice = createSlice({
    name: "lecture",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCourseLectures.fulfilled, (state, action) => {
            console.log(action);
            state.lectures = action?.payload?.lectures;
        })
        .addCase(addCourseLecture.fulfilled, (state, action) => {
            console.log(action);
            state.lectures = action?.payload?.course?.lectures;
        })
    }
});

export default lectureSlice.reducer;