import React from "react";
import {useState} from "react"
const useList = () => {
    const [list, setList] = useState([])
    const push =(value) => {
        const newList = list.concat(value)
        setList(newList)
    }
    const pull = (index)=> {
        const newlist = list.filter((listitem,listindex)=> {
            return listindex !== index
        })
        setList(newlist)
    }
return {
    list: list,
    pull: pull,
    push: push
}
}
export default useList
