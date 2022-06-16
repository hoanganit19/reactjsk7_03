import ComponentCon from "./ComponentCon";

function ComponentCha(props){

    const receiveData = (data) => {
        console.log('Data nhận được: '+data);
    }

    return (
        <ComponentCon onReceiveData={receiveData} />
    );
   
}

export default ComponentCha;