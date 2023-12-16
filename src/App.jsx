import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import AddContest from "./pages/AddContest";
import Contest from "./pages/Contest";
import LeaderboardList from "./pages/Leaderboard";
import Problems from "./pages/Problems";
import LearningResources from "./pages/LearningResources";
import OTMaterial from "./pages/OTMaterial";
import Discussion from "./pages/Discussion";
import Profile from "./pages/Profile";
// import { inject } from "@vercel/analytics";
// import { SpeedInsights } from "@vercel/speed-insights/react";
// inject();
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/discussion" element={<PrivateRoute />}>
            <Route path="/discussion" element={<Discussion />}></Route>
          </Route>
          <Route path="/problems" element={<PrivateRoute />}>
            <Route path="/problems" element={<Problems />}></Route>
          </Route>
          <Route path="/learning-resources" element={<PrivateRoute />}>
            <Route path="/learning-resources" element={<LearningResources />}></Route>
          </Route>
          <Route path="/ot-material" element={<PrivateRoute />}>
            <Route path="/ot-material" element={<OTMaterial />}></Route>
          </Route>
          <Route path="/contest" element={<PrivateRoute />}>
            <Route path="/contest" element={<Contest />}></Route>
          </Route>
          {/* <Route path="/" element={<PrivateRoute />}></Route> */}
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route path="/add-contest" element={<PrivateRoute />}>
            <Route path="/add-contest" element={<AddContest />}></Route>
          </Route>
          <Route path="/leaderboard" element={<PrivateRoute />}>
            <Route path="/leaderboard" element={<LeaderboardList />}></Route>
          </Route>
          <Route path="/Profile/*" element={<Profile />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* <SpeedInsights /> */}
    </>
  );
}

export default App;
