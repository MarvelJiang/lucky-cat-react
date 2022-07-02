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
    overflow-x: auto;
    white-space: nowrap;
  }
`

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

type RecordItem = {
    tagId: number
    note: string
    type: string
    amount: string
    createdAt: string
}

const Statistics = () => {
    const [type,setType] = useState('支出')
    const {records} = useRecords()
    const {getName} = useTags()
    const selectedRecords = () => {
        return records.filter(r => r.type === type)
    }
    const hash: { [k:string] : RecordItem[]} = {}
    selectedRecords().map(r =>{
        const key = day(r.createdAt).format('YYYY年MM月DD日')
        if(!(key in hash)){
            hash[key] = []
        }else{
            hash[key].push(r)
        }
        return undefined
    })
    const arr = Object.entries(hash).sort((a,b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0
    })
    return (
        <Layout>
                <TypesSection value={type} onChange={(type) => setType(type)}/>
            {arr.map(n =>
                <div key={n[0]}>
                    <Header>{n[0]}</Header>
                    <div>
                        {n[1].map(r=>
                            <Item key={r.tagId}>
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
                </div>)}

        </Layout>
    )
}

export default Statistics