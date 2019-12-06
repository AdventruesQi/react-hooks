import React, {useMemo,useState} from 'react';


function ExampleUseMemo(){
    const [xiaohong,setXiaohong]=useState("搓澡Hong在待客状态-----，");
    const [xiaogang,setXiaogang]=useState("按摩刚在待客状态ing");

    return (
        <div>
            <button onClick={()=>{setXiaohong(new Date().getTime()+"红")}}>我是搓澡红</button>
            <button onClick={()=>{setXiaogang(new Date().getTime()+"刚")}}>我是按摩刚</button>
            <Childcomponent name={xiaohong}>{xiaogang}</Childcomponent>
        </div>
    )
}

function Childcomponent({name,children}){
    function changeHong(){
        // console.log("他来了||ヽ(*￣▽￣*)ノミ|Ю，搓澡红来了");
        console.log(name);
        console.log(children);
        return "小红向我们走来了," + name
    }
    //useMemo需要出入一个传入一个函数，第二个参数是name的意思是，当name发生变化的时候才执行前面的那个函数。
    //效果：当小红发生变化的时候，才会执行重新渲染chagneHong的函数，点击按钮小刚的时候，不会执行changeHong函数。
    const actionHong=useMemo(()=>{changeHong(name)},[name]);
    // const actionHong=changeHong(name);
    return (
        <div>
            <div>{actionHong}</div>
            <div>{children}</div>
        </div>
    )
}
export default ExampleUseMemo;