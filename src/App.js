import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import MockmanTesting from "./pages/MockmanTesting";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/mockman" element={<MockmanTesting />}/>
      </Routes>
    </div>
  );
}

export default App;
