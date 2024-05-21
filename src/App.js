import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Modal from './Pages/Modal';
import Contact from './Pages/Contact';
import About from './Pages/About';
import StepLogin from './Pages/Login/StepLogin';
import NgoDashboard from './Pages/NgoDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import NgoLogin from './Pages/Login/NgoLogin';
import AdminLogin from './Pages/Login/AdminLogin';
import StepDashboard from './Pages/StepDashboard';
import AppContextProvider from './Context/AppContext';
import StepRegister from './Pages/Register/StepRegister';
import NgoRegister from './Pages/Register/NgoRegister';
import Policy from './Pages/Policy';

function App() {
  return (
    <div className="App">
    <AppContextProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/steplogin' element={<StepLogin />} />
        <Route path='/ngologin' element={<NgoLogin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/modal' element={<Modal />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/ngodashboard' element={<NgoDashboard />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/stepdashboard' element={<StepDashboard />} />
        <Route path='/stepregister' element={<StepRegister />} />
        <Route path='/ngoregister' element={<NgoRegister />} />
        <Route path='/policy' element={<Policy />} />
      </Routes>
    </AppContextProvider>
    </div>
  );
}

export default App;
