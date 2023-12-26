import React from "react";
import Hero from "./Pages/Hero";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <Hero />
              </>
            }
          />
          <Route
            path="/impressum"
            element={
              //add impressum here
              <></>
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
