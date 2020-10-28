import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App.tsx";
import * as serviceWorker from "./serviceWorker";
import store from "./Store"

const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render);

function fancyLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
    console.log(store.getState());
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
