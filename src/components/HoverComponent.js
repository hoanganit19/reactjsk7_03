import React from "react";
import Image from "./Image";
function HoverComponent(ImageComponent){

    class HoverImage extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                opacity: 1
            }
        }
    
        onMouseOver = () => {
            this.setState({
                opacity: 0.5
            })
        }
    
        onMouseOut = () => {
            this.setState({
                opacity: 1
            })
        }
    
        render(){
            return (
                <div 
                style={{opacity: this.state.opacity}}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                >
                    <ImageComponent />
                </div>
            );
        }
    }

    return HoverImage;
}

export default HoverComponent;