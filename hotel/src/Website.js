import React from 'react'
import { Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Room from './components/Room'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPass from './components/Forgotpass';
import EditForm from './components/EditForm';


function Website(){
    
    return(

        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Room' element={<Room/>}/>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
            <Route path='/forgot-password' element={<ForgotPass/>}></Route>
            <Route path='/edit/:id' element={<EditForm/>}/>
        </Routes>     
       
        </>
    )
}
export default Website;
