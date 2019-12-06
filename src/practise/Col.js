import React, { createContext,useReducer} from 'react';

export const ShareColor=createContext({});
export const UPDATE_COL="UPDATE_COL";

const reducer=(state,action)=>{
    switch(action.type){
        case "UPDATE_COL":
            return action.color
        default :
            return state
    }
}

//这个地方需要使用箭头函数，去传递props，达到渲染子组件的目的。
export const Col=(props)=>{
    const [color,dispatch]=useReducer(reducer,"orange")
    return (
        <ShareColor.Provider value={{color,dispatch}}>
            {props.children}
        </ShareColor.Provider>
        )
}