import Component3 from "./Component3";
import Component2 from "./Component2";
import React from "react";

const MsgContext = React.createContext();
MsgContext.displayName = 'Unicode';

console.log(MsgContext);

function Component1(){
    return (
        <>
            <MsgContext.Provider value="Component 1">
                <Component3 />
            </MsgContext.Provider>
            {/* <MsgContext.Consumer>
             {value => 'Unicode Academy'}
            </MsgContext.Consumer> */}
            <Component2 />
        </>
    
    );
}

Component3.contextType = MsgContext;

export default Component1;