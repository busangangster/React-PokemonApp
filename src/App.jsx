import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
