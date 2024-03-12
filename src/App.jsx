import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SubmitEvent from "./pages/SubmitEvent";
import BrowseEvents from "./pages/BrowseEvents";
import Faq from "./pages/Faq";
import MinuteDetails from "./pages/MinuteDetails";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit-event" element={<SubmitEvent />} />
        <Route path="/browse-events" element={<BrowseEvents />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/minutes-details" element={<MinuteDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
