import {useEffect, useState} from "react";
import createId from "../lib/createId";
import useUpdate from "./useUpdate";

const defaultTags = JSON.stringify(
    [{ id:1,name:'衣' },
          { id:2,name:'食' },
          { id:3,name:'住' },
          { id:4,name:'行' }]
)

const useTags = () => {
    const [tags,setTags] = useState<{ id:number,name:string }[]>([]);
    useEffect(()=>{
        setTags(JSON.parse(window.localStorage.getItem('tags') || defaultTags));
    },[]);
    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])
    const findTag = (id:number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id:number) => {
        let result = -1;
        for(let i=0;i<tags.length;i++){
            if(tags[i].id === id){
                result = i;
                break;
            }
        }
        return result;
    };
    const updateTag = (id:number,obj:{name:string}) => {
        setTags(tags.map(tag => tag.id === id ? {id,name:obj.name} : tag));
    };
    const deleteTag = (id:number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };
    const addTag = () => {
        const newTag = window.prompt('请输入新标签的名称')
        if(newTag !== null && newTag !== '' && newTag.length <= 4){
            setTags([...tags, {id:createId(),name:newTag}])
        }else{
            window.alert('新建标签名不能为空且不能超过4个字符！')
        }
    }
    const getName = (id:number) => {
        const tag = tags.filter(tag => tag.id === id)[0]
        return tag ? tag.name : ''
    }
    return {tags,setTags,findTag,updateTag,findTagIndex,deleteTag,addTag,getName}
};

export default useTags
