import React from "react";
class Customer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'customers': []
        }

        const axios = require('axios').default;
        axios.get('http://localhost:3000/customers').then((item)=>{
            console.log(item.data);
        })
    }

    componentDidMount = () => {
        const customerList = fetch('http://localhost:3000/customers');
        customerList.then(
            response => response.json()
        ).then(
            data => {
               
                this.setState({
                    'customers': data
                });
            });
    }

    render(){

        return (
            <div>
                <h2>Danh sách khách hàng</h2>
                {
                    this.state.customers.map((item)=>{
                        return <p key={item.id}>{item.name}</p>
                    })
                }
            </div>
        );
    }
}

export default Customer;