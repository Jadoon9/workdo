import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SubmitEvent from "./pages/SubmitEvent";
import BrowseEvents from "./pages/BrowseEvents";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit-event" element={<SubmitEvent />} />
        <Route path="/browse-events" element={<BrowseEvents />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
