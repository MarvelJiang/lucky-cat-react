import Layout from "../components/Layout";
import React from "react";
import useTags from "../useTags";

const Tags = () => {
    const {tags,setTags} =  useTags();
    return (
        <Layout>
            <div>标签</div>
        </Layout>
    )
}

export default  Tags