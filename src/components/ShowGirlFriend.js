function ShowGirlFriend(props){
    //console.log(props);
    return (
        <div>
            {
                props.listGirlFriends.map((item, index)=>{
                    props.children(item);
                    return <p key={item.id}>{item.name}</p>
                })
            }
      
        </div>
    );
}

export default ShowGirlFriend;