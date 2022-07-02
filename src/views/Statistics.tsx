import Layout from "../components/Layout";
import React, {useState} from "react";
import TypesSection from "./Money/TypesSection";
import useRecords from "../hooks/useRecords";
import useTags from "../hooks/useTags";
import day from "dayjs"

const Statistics = () => {
    const [type,setType] = useState('支出')
    const {records} = useRecords()
    const {getName} = useTags()
    return (
        <Layout>
                <TypesSection value={type} onChange={(type) => setType(type)}/>

            <div>
                {records.map(r=>
                    <div>
                        <span>{day(r.createdAt).format('YYYY年MM月DD日')}</span>
                        <hr/>
                        <span>{getName(r.tagId)}</span>
                        <span>{r.note}</span>
                        <span>￥{r.amount}</span>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Statistics