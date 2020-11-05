import React from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import MyForm from "./components/MyForm"
import "./App.css";

function App() {
  return (
    <div>
      <MyForm />
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;
