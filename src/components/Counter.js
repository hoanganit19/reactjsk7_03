import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    //Hàm tăng
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    //Hàm giảm
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return (
           <div>
            {
                this.props.render(
                    {
                        count: this.state.count,
                        increment: this.increment,
                        decrement: this.decrement
                    }
                )
            }
           </div>
        );
    }
}

export default Counter;