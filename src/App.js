import Video from "./Video"
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchArea from "./SearchArea";
import { Router } from "@reach/router";
import WatchArea from "./WatchArea";
import ColorContext from "./ColorContext";
const App = () => {
  const themeColor = useState("darkblue");
  return (
    <ColorContext.Provider value = {themeColor}>
      <div>
      <header>
        <a href="/">MyTube</a>
      </header>
      {/* <h2>MyTube</h2> */}
      <Router>

      <SearchArea path="/"/>
      <WatchArea path="/watch/:id" />
      </Router>
      
    </div>
    </ColorContext.Provider>
   
  )
};
// const App = () => {
  
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, "MyTube"),
//     React.createElement(Video, {
//       title: "The Best Video on Mytube",
//       dateAdded: "2 days Ago",
//       channel: "New Channel",
//     }),
//     React.createElement(Video, {
//       title: "The learning Video on Mytube",
//       dateAdded: "1 days Ago",
//       channel: "News Channel",
//     }),
//     React.createElement(Video, {
//       title: "The cool Video on Mytube",
//       dateAdded: "6 days Ago",
//       channel: "local Channel",
//     }),
//   ]);
// };
ReactDOM.render(React.createElement(App), document.getElementById("root"));
