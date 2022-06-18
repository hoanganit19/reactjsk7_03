import Counter from "./Counter";

function CounterV2(){

    const renderCount = (data) => {
      
        return (
          <div style={{
            border: '1px solid red',
            background: 'grey'
          }}>
            <h2>Giá trị: {data.count}</h2>
            <button type="button" onClick={data.increment}>Tăng</button>
            <button type="button" onClick={data.decrement}>Giảm</button>
          </div>
        );
    }

    return (
        <Counter render={renderCount} />
    );

}

export default CounterV2;