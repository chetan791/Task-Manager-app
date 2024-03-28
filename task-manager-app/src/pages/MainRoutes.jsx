import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { TaskPage } from "./TaskPage";
import { Home } from "./Home";
import { Private } from "../components/Private";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/taskpage" element={<Private child={<TaskPage />} />} />
    </Routes>
  );
};
