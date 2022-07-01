import Layout from "../components/Layout";
import React, {useState} from "react";
import TagsSection from "./Money/TagsSection";
import NotesSection from "./Money/NoteSection";
import TypesSection from "./Money/TypesSection";
import NumberPadSection from "./Money/NumberPadSection";

const Money = () => {
    const [selected,setSelected] = useState({
        tag:'',
        note:'',
        type:'支出',
        amount:'0',
    })
    const onChange = (obj:Partial<typeof selected>) => {
        setSelected(
            {...selected,
            ...obj
            })
    }
    return (
        <Layout>
            <TagsSection value={selected.tag} onChange={(tag) => onChange({tag})}/>
            <NotesSection value={selected.note} onChange={(note) => onChange({note})}/>
            <TypesSection value={selected.type} onChange={(type) => onChange({type})}/>
            <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})}/>
        </Layout>
    )
}

export default Money