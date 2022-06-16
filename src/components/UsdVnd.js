function UsdVnd(props){

    const rate = props.rate; //Tỷ giá

    //Hàm convert chuyển usd => vnd
    const convert = (usd) => {
        return rate * usd;
    }

    //Hàm chuyển tỷ giá khi người dùng thay đổi trong input
    const handleChangeUsd = (e) => {
        let usd = e.target.value;
        if (usd.trim()===''){
            usd = 0;
        }

        let vnd = convert(usd);
        
        usd = parseFloat(usd);
        vnd = parseFloat(vnd);

        vnd = vnd.toLocaleString();

        props.onHandleChange({
            usd,
            vnd
        });

    }   

    return (
        <div>
            <label>USD</label>
            <input 
            type="text" 
            placeholder="Nhập USD..." 
            onChange={handleChangeUsd} 
            value={props.value}
            />
        </div>
    );
}   

export default UsdVnd;