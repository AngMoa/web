import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../components/Index";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import RegisterSuccess from "../views/RegisterSuccess";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/regSuccess" element={<RegisterSuccess />} />
        </Routes>
    );
};

export default Router;
