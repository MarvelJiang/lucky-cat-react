import React from "react";
import useTags from "../hooks/useTags";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import Button from "../components/Button";
import styled from "styled-components";
import Input from "../components/Input";
import Center from "../components/Center";

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

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`

const Tag:React.FC = () => {
    const {findTag,updateTag,deleteTag} = useTags();
    let {id:idString} = useParams<Params>();
    const tag = findTag(parseInt(idString!));
    if(tag){
        const onClickBack = () => {
            window.history.back()
        }
        return (
            <Layout>
                <Tabbar>
                    <Icon name="left" onClick={onClickBack}/>
                    <span>编辑标签</span>
                    <Space />
                </Tabbar>
                <InputWrapper>
                    <Input label="标签名" type="text" placeholder="标签名..." value={tag.name}
                           onChange={(e)=>{
                               updateTag(tag.id,{name:e.target.value})
                           }}/>
                </InputWrapper>
                <Center>
                    <Space/>
                    <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
                </Center>
            </Layout>
        )
    }else{
        return (
            <div>hhh</div>
        )
    }
}

export default Tag