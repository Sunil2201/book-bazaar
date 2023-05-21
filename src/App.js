import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import MockmanTesting from "./pages/MockmanTesting";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/mockman" element={<MockmanTesting />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
