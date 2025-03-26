import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosinstance.js";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data:
    localStorage.getItem("data") !== undefined
      ? JSON.parse(localStorage.getItem("data"))
      : {},
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstance.post("user/register", data);
    toast.promise(res, {
      loading: "Wait! creating your account✨",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to create account✨",
    });

    return (await res).data;
  } catch (error) {
    const message =
      error?.response?.data?.message || "An unknown error occurred";
    toast.error(message, {
      position: "top-right",
    });
  }
});

export const login = createAsyncThunk("/auth/login", async (data) => {
  try {
    const res = axiosInstance.post("user/login", data);
    toast.promise(res, {
      loading: "Wait! authentication in progress..✨",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to login✨",
    });

    return (await res).data;
  } catch (error) {
    const message =
      error?.response?.data?.message || "An unknown error occurred";
    toast.error(message, {
      position: "top-right",
    });
  }
});

export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    const res = axiosInstance.post("user/logout");
    toast.promise(res, {
      loading: "Wait! logout in progress..✨",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to log out✨",
    });

    return (await res).data;
  } catch (error) {
    // toast.error(error?.response?.data?.message);
    const message =
      error?.response?.data?.message || "An unknown error occurred";
    toast.error(message);
  }
});

// export const logout = createAsyncThunk("/auth/logout", async () => {
//   try {
//     const res = await axiosInstance.post("user/logout");
//     toast.promise(res, {
//       loading: "Logging out...",
//       success: (data) => {
//         return data?.data?.message || "Logged out successfully!";
//       },
//       error: "Failed to log out.",
//     });
//     return res.data;
//   } catch (error) {
//     console.error("Logout error: ", error); // Log the error to console
//     const message =
//       error?.response?.data?.message || "An unknown error occurred";
//     toast.error(message);
//     throw new Error(message);  // Rethrow the error
//   }
// });

export const updateProfile = createAsyncThunk(
  "/user/update",
  async (data) => {
    try {
      const res = axiosInstance.put(`user/update/${data[0]}`, data[1]); // data[1] should include the updated user info

      toast.promise(res, {
        loading: "Wait! Profile update in progress..💨",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to update profile ⚠",
      });

      return (await res).data;
    } catch (error) {
      const message =
        error?.response?.data?.message || "An unknown error occurred";
      toast.error(message);
    }
  }
);

export const getUserData = createAsyncThunk("/user/details", async () => {
  try {
    const res = axiosInstance.get("user/me");

    return (await res).data;
  } catch (error) {
    toast.error(error.message || "An unknown error occurred");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.data = {};
        state.isLoggedIn = false;
        state.role = "";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        if (!action?.payload?.user) return;
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      });
  },
});

// export const {}=authSlice.actions;
export default authSlice.reducer;
