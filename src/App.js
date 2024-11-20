import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/MainPage"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
				<Route path="/" element={<Home />} />
			</Routes>
  );
}

export default App;
