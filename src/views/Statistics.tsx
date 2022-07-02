import Layout from "../components/Layout";
import React, {useState} from "react";
import TypesSection from "./Money/TypesSection";
import useRecords from "../hooks/useRecords";
import useTags from "../hooks/useTags";
import day from "dayjs";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding:10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    opacity: .7;
  }
`

const Statistics = () => {
    const [type,setType] = useState('支出')
    const {records} = useRecords()
    const {getName} = useTags()
    return (
        <Layout>
                <TypesSection value={type} onChange={(type) => setType(type)}/>

            <div>
                {records.map(r=>
                    <Item>
                        {/*<span>{day(r.createdAt).format('YYYY年MM月DD日')}</span>*/}
                        <div className="tags">
                            <span>{getName(r.tagId)}</span>
                        </div>
                        <div className="note">
                            <span>{r.note}</span>
                        </div>
                        <div className="amount">
                            <span>￥{r.amount}</span>
                        </div>
                    </Item>
                )}
            </div>
        </Layout>
    )
}

export default Statistics