function VndUsd(props){

    const rate = props.rate; //Tỷ giá

    //Hàm convert() chuyển từ vnd => usd
    const convert = (vnd) => {
        let number = vnd / rate;
        
        return number.toFixed(3);
    }

    //Hàm chuyển tỷ giá khi người dùng thay đổi trong input
    const handleChangeVnd = (e) => {

        let vnd = e.target.value;
        let usd = convert(vnd);
       
        if (vnd.trim()===''){
            vnd = 0;
        }

        vnd = parseFloat(vnd);
        usd = parseFloat(usd);

        usd = usd.toLocaleString();

        props.onHandleChange({
            usd,
            vnd
        });
    }   

    return (
        <div>
            <label>VND</label>
            <input 
            type="text" 
            placeholder="Nhập VND..." 
            onChange={handleChangeVnd} 
            value={props.value}
            />
        </div>
    );

}

export default VndUsd;