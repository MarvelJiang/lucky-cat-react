import {useEffect, useState} from "react";
import useUpdate from "./useUpdate";

type newRecordItem = Omit<RecordItem, 'createdAt'>

type RecordItem = {
    tagId: number
    note: string
    type: string
    amount: string
    createdAt: string
}

const useRecords = () => {
    const [records,setRecords] = useState<RecordItem[]>([]);

    const addRecord = (newRecord:newRecordItem) => {
        const record = {...newRecord,createdAt:(new Date()).toISOString()}
        if(record.amount !== '0' && record.amount.indexOf('.')!==record.amount.length-1){
            if(record.tagId > 0){
                setRecords([...records,record]);
                window.alert('记账成功');
                setTimeout(()=>{
                    window.location.href='#/statistics'
                },0)
            }else{
                window.alert('请选择一个标签！');
            }
        }
    };

    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    },[])

    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records]);

    return {records,addRecord};
}

export default useRecords