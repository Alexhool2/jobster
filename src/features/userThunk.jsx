import customFetch from "../assets/utils/axios";
import { logoutUser } from "./user/userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    console.log(resp);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};


export const loginUserThunk = async (url,user,thunkAPI)=>{
    try {
      const resp = await customFetch.post(url, user);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const updateUserThunk = async (url, user, thunkAPI)=>{
    try {
      const resp = await customFetch.patch(url, user, {
       
      });
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorired! Logging out...");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}