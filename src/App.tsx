import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col">
      <div className="h-12 fixed border-4 border-black rounded shadow">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="h-12"> </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
