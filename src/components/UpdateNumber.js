import React from "react";

class UpdateNumber extends React.Component{

    render(){
        return (
            <button
            type="button"
            onClick={
                () => {
                    this.context.update();
                }
            }
            >
                Update
            </button>
        );
    }
}

export default UpdateNumber;