import React from "react";

class ShowNumber extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <h2>
            
                {this.context.number}
            </h2>
        );
    }
}


export default ShowNumber;