import "./App.css";
import React from "react";


function App() {
  return (
    <div>
      <h1 className="main-header">Crud App</h1>
      <hr></hr>
      <a className="main-header" href="/create"> Create</a>
      <br></br><hr></hr>
      <a className="main-header" href="/read">Read</a>
      <br></br><hr></hr>
      <a className="main-header" href="/update">Update</a>
      <hr></hr>
    </div>
  );
}

export default App;
