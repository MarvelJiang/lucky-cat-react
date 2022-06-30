import styled from "styled-components";
import React, {useState} from "react";

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

const TypesSection:React.FC = () => {
    const [typeList] = useState<('支出'|'收入')[]>(['支出','收入'])
    const [type,setType] = useState<string>('支出')
    return (
        <TypesSectionWrapper>
            <ul>
                {typeList.map(n=><li className={type === n ? 'selected' : ''}
                                     onClick={()=>{setType(n)}} key={n}>{n}</li>)}
            </ul>
        </TypesSectionWrapper>
    )
}

export default TypesSection