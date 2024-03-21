import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SubmitEvent from "./pages/SubmitEvent";
import BrowseEvents from "./pages/BrowseEvents";
import Faq from "./pages/Faq";
import MinuteDetails from "./pages/MinuteDetails";
import ShopNow from "./pages/ShopNow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit-event" element={<SubmitEvent />} />
          <Route path="/browse-events" element={<BrowseEvents />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/minutes-details" element={<MinuteDetails />} />
          <Route path="/shop-now" element={<ShopNow />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
