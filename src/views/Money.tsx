import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
`

const NotesSection = styled.section`
`

const TypesSection = styled.section`
`

const NumberPadSection = styled.section`
`

const Money = () => {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input/>
                </label>
            </NotesSection>
            <TypesSection>
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
            </TypesSection>
            <NumberPadSection>
                <div>
                    <span>￥</span>
                    <span>100</span>
                </div>
                <div>
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
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    )
}

export default Money