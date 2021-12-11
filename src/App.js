import './App.css';
// import Header from './Header.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Header /> */}
      <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

