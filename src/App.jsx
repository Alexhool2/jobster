import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Landing, Error, Register, ProtectedRoute } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <ProtectedRoute>

        <SharedLayout />
        </ProtectedRoute>
        
        }>
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={1500}
        closeOnClick={true}
        pauseOnHover={true}
      />
    </BrowserRouter>
  );
};
export default App;
