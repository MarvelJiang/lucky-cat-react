import Layout from "../components/Layout";
import React from "react";
import TagsSection from "./Money/TagsSection";
import NotesSection from "./Money/NoteSection";
import TypesSection from "./Money/TypesSection";
import NumberPadSection from "./Money/NumberPadSection";

const Money = () => {
    return (
        <Layout>
            <TagsSection/>
            <NotesSection/>
            <TypesSection/>
            <NumberPadSection/>
        </Layout>
    )
}

export default Money