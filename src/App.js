import logo from "./logo.svg";
import "./App.css";
import Nav from "./Navbar/Nav";
import Main from "./Main-Container/Main";
import Lower_Container from "./Main-Container/Lower_Container";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
