import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import RegisterCompany from "./components/companyRegister/RegisterCompany"

function App() {
  return (
    <>

    <Navbar></Navbar>
    <Routes>
      <Route path="/registercompany" element={<RegisterCompany/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
