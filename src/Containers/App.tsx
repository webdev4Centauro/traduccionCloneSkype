import React from "react";
import Sidebar from "../Components/Sidebars";
import Main from "../Components/Main";
import "../Styles/App.css";
import store from '../Store/index.js';
// Used to convert objects to arrays
import _ from "lodash";

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      {/* Passing contacts as an array with the lodash method */}
      <Sidebar contacts={_.values(contacts)}/>

      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
};

export default App;
