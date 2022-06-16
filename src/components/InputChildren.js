import React from "react";

const InputChildren = React.forwardRef((props, ref) => {
    return <input type="text" placeholder="Họ tên..." name={props.name} ref={ref} />
});

// const InputChildren = (props) => {
//     return <input type="text" placeholder="Họ tên..." name={props.name} ref={props.refs} />
// }

export default InputChildren;