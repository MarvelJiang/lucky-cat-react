import React from 'react';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

function App() {
  return (
      <HashRouter>
          <Wrapper>
              <Main>
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
              </Main>

              <Nav />
          </Wrapper>
      </HashRouter>
  );
}

const Tags = () => {
    return (
        <div>标签</div>
    )
}

const Money = () => {
    return (
        <div>记账</div>
    )
}

const Statistics = () => {
    return (
        <div>统计</div>
    )
}


export default App;
