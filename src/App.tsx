import React from 'react';
import {
    HashRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Nav = styled.nav`
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
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

              <Nav>
                  <ul>
                      <li>
                          <Link to="/tags">标签</Link>
                      </li>
                      <li>
                          <Link to="/money">记账</Link>
                      </li>
                      <li>
                          <Link to="/statistics">统计</Link>
                      </li>
                  </ul>
              </Nav>
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
