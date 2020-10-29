import React from "react";
import Sidebar from "../Components/Sidebars";
import Main from "../Components/Main";
import "../Styles/App.css";
import store from '../Store/index.js';
// Used to convert objects to arrays
import _ from "lodash";
import IUserModel from "../models/IUserModel";

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  //var mensajes:IMessageModel[]=_.values(activeMessages);
  var contactos:IUserModel[]=_.values(contacts);

  return (
    <div className="App">
      {/* Passing contacts as an array with the lodash method */}
      {/* <Sidebar contacts={_.values(contacts)}/> */}
      <Sidebar contacts={contactos}/>

      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
};

export default App;
