function ComponentCon(props){
    return (
        <div>
            <button onClick={
                () => {
                    props.onReceiveData('data gửi đi');
                }
            }>
                Gửi lại cho Component Cha
            </button>
        </div>
    );
}

export default ComponentCon;