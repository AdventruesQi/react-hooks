import React, { createContext,useReducer} from 'react';

export const ColorContext=createContext({});

export const UPDATE_COLOR="UPDATE_COLOR";

const reducer=(state,action)=>{
    switch(action.type){
        case "UPDATE_COLOR":
            return action.color
        default :
        return  state
    }
}

export const Color = props=>{
    //useReducer的参数是需要传递一个reducer函数进去，以及初始化的状态值。 "pink"就是color的初始化状态值。
    const [color,dispatch] = useReducer(reducer,"pink")
       return (
           <ColorContext.Provider value={{color,dispatch}}>
               {props.children}
           </ColorContext.Provider>
       )
} 