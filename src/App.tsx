import React from 'react';
import { HashRouter, Routes, Route, } from "react-router-dom";
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";

function App() {
  return (
      <HashRouter>
                  <Routes>
                      <Route path="/" element={<Money />} />
                      <Route path="/tags" element={<Tags />} />
                      <Route path="/money" element={<Money />} />
                      <Route path="/statistics" element={<Statistics />} />
                      <Route
                          path="*"
                          element={
                              <main style={{ padding: "1rem" }}>
                                  <p>There's nothing here!</p>
                              </main>
                          }
                      />
                  </Routes>
      </HashRouter>
  );
}

export default App;
