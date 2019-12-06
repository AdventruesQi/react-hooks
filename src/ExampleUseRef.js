import React, { useState,useRef,useEffect} from 'react';

function ExampleUseRef(){
    const inputEl=useRef(null);
    const changeIt=()=>{
        inputEl.current.value="hello world";
        console.log(inputEl);
    };

    const [curtext,setCurtext]=useState("这个是耿鬼么？");
    //useRef保存变量的值
    const curT=useRef();
    useEffect(()=>{
       curT.current=curtext;
       console.log("curT",curT.current);
    });

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={changeIt}>进化吧~！</button>
            <br/>
            <input onChange={(e)=>{setCurtext(e.target.value)}}  value={curtext} />
        </div>
    )
}
export default ExampleUseRef;