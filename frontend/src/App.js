import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
        <Header/>
        <div className='containter'>
          <Routes>  
            <Route exact path='/' element={<EmployeeList/>}></Route>
            <Route exact path='/employees' element={<EmployeeList/>}></Route>
            <Route exact path='/add-employee/:id' element={<CreateEmployee/>}></Route>
            <Route exact path='/view-employee/:id' element={<ViewEmployee/>}></Route>
            {/* <Route exact path='/update-employee/:id' element={<UpdateEmployee/>}></Route> */}
          </Routes>
          </div>
        <Footer/>
      </div>
  );
}

export default App;
