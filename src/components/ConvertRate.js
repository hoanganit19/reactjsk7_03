import React from "react";

import UsdVnd from "./UsdVnd";
import VndUsd from './VndUsd';

class ConvertRate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usd: 0,
            vnd: 0
        }
    }

    handleChange = (data) => {
        this.setState(data);
        
    }

    render() {

        return (
            <div style={{margin: "20px"}}>
                <UsdVnd rate={this.props.rate} onHandleChange={this.handleChange} value={this.state.usd} />
                <VndUsd rate={this.props.rate} onHandleChange={this.handleChange} value={this.state.vnd}/>
            </div>
        );
    }
}

export default ConvertRate;