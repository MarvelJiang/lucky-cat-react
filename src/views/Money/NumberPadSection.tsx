import styled from "styled-components";
import React from "react";

const NumberPadSectionWrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
    inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
      font-size: 18px; float: left; width: 25%; height: 64px; border: none;
      &.ok{ height: 128px; float: right; }
      &.zero{ width: 50%; }
      &:nth-child(1){
        background:#f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
    }
  }
`

type Props = {
    value:string,
    onChange:(value:string) => void,
    onOk?:()=>void
}

const NumberPadSection:React.FC<Props> = (props) => {
    const numberArr = ['0','1','2','3','4','5','6','7','8','9'];
    const output = props.value;
    const setOutput = (output:string) => {
        let value
        if(output.length > 14){
            value=output.slice(0,14)
        }else{
            value=output
        }
        props.onChange(value)
    }
    const onclickButtonWrapper = (e:React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent!;
        if(numberArr.indexOf(text)>=0){
            output === '0' ? setOutput(text) : setOutput(output + text)
        }else if (text === '删除'){
            output.length === 1 ? setOutput('0') : setOutput(output.slice(0, -1))
        }else if (text === '清空'){
            setOutput('0')
        }else if(text === '.'){
            output.indexOf('.') < 0 ? setOutput(output + '.') : setOutput(output)
        }else if(text === 'OK'){
            if(props.onOk){

            }
        }
    }
    return (
        <NumberPadSectionWrapper>
            <div className="output">
                <span>￥</span>
                <span>{output}</span>
            </div>
            <div className="pad clearfix" onClick={(e:React.MouseEvent)=>{onclickButtonWrapper(e)}}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </NumberPadSectionWrapper>
    )
}

export default NumberPadSection