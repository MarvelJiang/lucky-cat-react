import React from 'react';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";

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

const Tags = () => {
    return (
        <Layout>
            <div>标签</div>
        </Layout>
    )
}

const Money = () => {
    return (
        <Layout>
            <div>记账</div>
        </Layout>
    )
}

const Statistics = () => {
    return (
        <Layout>
            <div>统计</div>
        </Layout>
    )
}


export default App;
