import logo from "./logo.svg";
import "./App.css";
import ComponentCha from "./components/ComponentCha";
import ConvertRate from "./components/ConvertRate";
import Refs from "./components/Refs";
import ForwardRef from "./components/ForwardRef";
import Component1 from "./components/Component1";
import Component3 from "./components/Component3";
import React from "react";
import RandomNumber from "./components/RandomNumber";
import Fragments from "./components/Fragments";
import Unicode from "./components/Unicode";
import ShowGirlFriend from "./components/ShowGirlFriend";
import Counter from "./components/Counter";
import CounterV2 from "./components/CounterV2";
import HoverComponent from "./components/HoverComponent";
import Image from "./components/Image";
import Image2 from "./components/Image2";
import Customer from "./components/Customer";

function App() {
  const rate = 23235;

  const renderHandle = (data) => {
    return <h1>Chào mừng bạn đến với: {data}</h1>;
  };

  const myGirlFriends = [
    {
      id: 1,
      name: "Khanh Huyen",
      email: "khanhhuyen123@gmail.com",
    },
    {
      id: 2,
      name: "Nguyen Hang",
      email: "nguyenhang3dzas@gmail.com",
    },
    {
      id: 3,
      name: "Pham Uyen",
      email: "phamuyenz@gmail.com",
    },
  ];

  const renderCount = (data) => {
      
      return (
        <div>
          <h2>Giá trị: {data.count}</h2>
          <button type="button" onClick={data.increment}>Tăng</button>
          <button type="button" onClick={data.decrement}>Giảm</button>
        </div>
      );
  }


  const HoverImage01 = HoverComponent(Image);
  const HoverImage02 = HoverComponent(Image2);

  return (
    <div>
      {/* <ComponentCha/> */}
      {/* <ConvertRate rate={rate}/> */}
      <div style={{ margin: "20px" }}>
        {/* <Refs /> */}
        {/* <ForwardRef /> */}
        {/* <Component1 /> */}
        {/* <RandomNumber /> */}
        {/* <Fragments /> */}
        {/* <Unicode render={renderHandle}/> */}
        {/* <ShowGirlFriend listGirlFriends={myGirlFriends}>
          {
            (data) => {
              console.log(data);
            }
          }
        </ShowGirlFriend> */}
        {/* <Counter render={renderCount}/> */}
        {/* <CounterV2 /> */}
        {/* <HoverImage01 />
        <HoverImage02 /> */}
        <Customer />
      </div>
    </div>
  );
}

export default App;
