// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage, Home, Signin, Signup } from "./Pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
