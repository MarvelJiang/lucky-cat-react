import React from "react";
import useTags from "../useTags";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import Button from "../components/Button";
import styled from "styled-components";

type Params = {
    id: string
}

const Space = styled.div`
    &::after{
      display: block;
      content: '';
      height: 24px;
      width: 24px;
      border: 1px solid transparent;
    }
`

const Tabbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`

const Tag:React.FC = () => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id!));
    return (
        <Layout>
            <Tabbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Space />
            </Tabbar>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder="标签名..."/>
                </label>
            </div>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
        )
}

export default Tag