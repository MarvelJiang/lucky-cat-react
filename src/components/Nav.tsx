import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      > .selected {
        text-decoration: underline;
      }
    }
  }
`

const Nav = () => {
    let activeClassName = "selected";
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="labels" />
                    <NavLink to="/tags" className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>标签</NavLink>
                </li>
                <li>
                    <Icon name="money" />
                    <NavLink to="/money" className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>记账</NavLink>
                </li>
                <li>
                    <Icon name="statistics" />
                    <NavLink to="/statistics" className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>统计</NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav