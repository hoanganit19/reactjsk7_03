import React from "react";

function Refs(){

    const refInput = React.createRef();

    const handleSubmit = () => {
        refInput.current.style.border = '1px solid red';
        refInput.current.value = 'Unicode';
        refInput.current.classList.add('username');
    }

    return (
        <>
            <input type="text" ref={refInput} placeholder="Họ và tên" />
            <button type="button" onClick={handleSubmit}>Submit</button> 
        </>
    );
}

export default Refs;