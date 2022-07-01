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

type Props = {
    value:string,
    onChange:(type:string)=>void
}

const TypesSection:React.FC<Props> = (props) => {
    const [typeList] = useState<('支出'|'收入')[]>(['支出','收入'])
    const type = props.value;
    return (
        <TypesSectionWrapper>
            <ul>
                {typeList.map(n=><li className={type === n ? 'selected' : ''}
                                     onClick={()=>{props.onChange(n)}} key={n}>{n}</li>)}
            </ul>
        </TypesSectionWrapper>
    )
}

export default TypesSection