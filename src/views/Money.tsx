import Layout from "../components/Layout";
import React, {useState} from "react";
import TagsSection from "./Money/TagsSection";
import NotesSection from "./Money/NoteSection";
import TypesSection from "./Money/TypesSection";
import NumberPadSection from "./Money/NumberPadSection";
import useRecords from "../hooks/useRecords";

const defaultFormDate = {
    tagId:0,
    note:'',
    type:'支出',
    amount:'0',
}

const Money = () => {
    const [selected,setSelected] = useState(defaultFormDate)
    const {records,addRecord} = useRecords()
    const onChange = (obj:Partial<typeof selected>) => {
        setSelected(
            {...selected,
            ...obj
            })
    }
    const submit = () => {
        addRecord(selected);
        setSelected(defaultFormDate)
    }
    return (
        <Layout>
            <TagsSection value={selected.tagId} onChange={(tagId) => onChange({tagId})}/>
            <NotesSection value={selected.note} onChange={(note) => onChange({note})}/>
            <TypesSection value={selected.type} onChange={(type) => onChange({type})}/>
            <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})} onOk={submit}/>
        </Layout>
    )
}

export default Money