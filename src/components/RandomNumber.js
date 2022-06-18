import React from "react";
import ShowNumber from "./ShowNumber";
import UpdateNumber from "./UpdateNumber";

//Khởi tạo context
const NumberContext = React.createContext();

class RandomNumber extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            number: 0
        }
    }

    updateNumber = () => {
        this.setState({
            number: Math.random()
        });
    }

    render(){
        return (
            <>
            <NumberContext.Provider value={{
                number: this.state.number,
                update: this.updateNumber
            }}>
                <NumberContext.Consumer>
                   {
                        value => (
                            <>
                                <ShowNumber/>
                                <UpdateNumber />
                            </>
                        )
                   }
                </NumberContext.Consumer>
                
            </NumberContext.Provider>
            </>
        );
    }
}

ShowNumber.contextType = NumberContext;
UpdateNumber.contextType = NumberContext;

export default RandomNumber;