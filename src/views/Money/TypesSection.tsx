import styled from "styled-components";
import React from "react";

const TypesSectionWrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%;
      text-align:center;
      padding: 16px 0;
      border-bottom: 4px solid transparent;
      &.selected{
        border-bottom: 4px solid black;
      }
    }
  }
`

const TypesSection = () => {
    return (
        <TypesSectionWrapper>
            <ul>
                <li className="selected">支出</li>
                <li>收入</li>
            </ul>
        </TypesSectionWrapper>
    )
}

export default TypesSection