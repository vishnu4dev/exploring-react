import React from "react";
import { ReactDOM } from "react-dom/client";

const Title = ()=> <h1> Namaste React </h1>;

export default App = () => {
    const data = "data from api waiting..";
    return (
        <div id="container">
            {data}
            {console.log("From App.js")}
            <Title/>
             <h2>Hello World</h2>
             <h4>Concluding Chapter 3</h4>
        </div>
    )
}
