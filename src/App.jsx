import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Form from './Components/Form/Form'
import Address from './Components/Address/Address';
import { Routes, Route } from 'react-router-dom';
import OTPComponent from './Components/Otp/Otp';
function App() {
 
  return (
    <>

           <Navbar/>
           
           <Routes> 
           <Route path='/' element={<Form/>} />
           <Route path="/otp" element={ <OTPComponent/>} /> 
           <Route path = "/address" element={<Address/>} />
           <Route path = "/otp" element={<OTPComponent/> } />
           <Route path = "/form" element={<Form/> } />
           </Routes>
    </>
  )
}

export default App
