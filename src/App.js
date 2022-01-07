import './App.css';
// import Header from './Header.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import {motion} from 'framer-motion/dist/es/index';
import "./App.css";
import PdfViewerComponent from './components/PdfViewerComponent';

function DocumentViewerComponent() {
	return (
		<div className="PDF-viewer">
			<PdfViewerComponent
				document={"page 2.pdf"}
			/>
		</div>
	);
}

function App() {
  return (
    <div>
    <Router>
    <div className="App">
      {/* <Header /> */}
      <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pdff" element={  <DocumentViewerComponent />} />
      </Routes>
    </div>
    </Router>
     </div>
  );
}

export default App;

