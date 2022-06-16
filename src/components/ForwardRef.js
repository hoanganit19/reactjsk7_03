import React from "react";

import InputChildren from "./InputChildren";

const ForwardRef = () => {
    const inputRef = React.createRef();

    const handleSubmit = () => {
        inputRef.current.style.border = '1px solid red';
    }

    /*
        - Chuyển ref từ component cha tới component con
        - Component con sẽ được tạo bằng React.forwardRef(props, ref)
    */

    return (
        <>
            <InputChildren name="fullname" refs={inputRef} />
            <button type="button" onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default ForwardRef;