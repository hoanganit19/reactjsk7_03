import Component3 from "./Component3";
import Component2 from "./Component2";
import React from "react";

const MsgContext = React.createContext();

function Component1(){
    return (
        <>
            <MsgContext.Provider value="Dữ liệu chuyển từ 1 sang 3">
                <Component3 />
            </MsgContext.Provider>
            <Component2 />
        </>
    
    );
}

Component3.contextType = MsgContext;

export default Component1;