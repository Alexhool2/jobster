import customFetch, {
  checkForUnauthorizedResponse,
} from "../../assets/utils/axios";
import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice";
import { clearValues } from "./jobSlice";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs/", job, {});
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
     return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`, {});
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
  return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job, {});
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
     return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
