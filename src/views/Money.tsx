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
    return (
        <Layout>
            <TagsSection value={selected.tag} onChange={(tag) => setSelected({
                ...selected,
                tag:tag
            })}/>
            <NotesSection value={selected.note} onChange={(note) => setSelected({
                ...selected,
                note:note
            })}/>
            <TypesSection value={selected.type} onChange={(type) => setSelected({
                ...selected,
                type:type
            })}/>
            <NumberPadSection value={selected.amount} onChange={(amount) => setSelected({
                ...selected,
                amount:amount
            })}/>
        </Layout>
    )
}

export default Money