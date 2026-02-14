//import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";
import NoteDetail from "./pages/noteDetail";
import Navbar from "./componets/NavBar";
import toast from "react-hot-toast";
const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(100%_100%_at_50%_10%,#000_80%,#00FF9D15_100%)]" />

      <Routes>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>
        <Route path="/create" element={<CreatePage />}>
          {" "}
        </Route>
        <Route path="/note/:id" element={<NoteDetail />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
