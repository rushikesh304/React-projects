// import axios from 'axios';
// import './editform.css'
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditForm = () => {
//     const {id}=useParams();
//     const navigate=useNavigate()
//     const [alldata,setalldata]=useState([])
//     console.log(id);
//     // console.log(userId.id);
// console.log(alldata);
//     useEffect(()=>{
//         axios(`http://localhost:8001/getdata/${id}`)
//         .then((res)=>{
//             // console.log(res.data);
//             setalldata(res.data[0])
//         }).catch((e)=>{
//             console.log(e);
//         })
//     },[id])

//     const handlesubmit=(e)=>{
// e.preventDefault();
//         axios.put(`http://localhost:8001/updatedata/${id}`,alldata)
//         .then((res)=>{
//             console.log(res);     
//             alert("Updated!....")    
//             navigate('/') 
//         }).catch((e)=>{
//             console.log(e);
//         })
//     }

//     return (
//         <div className='edit-form'>
//             <h1>Edit Form</h1>
//             <form onSubmit={handlesubmit}>
//                 <label>Usename</label>
//                 <input type="text" value={alldata.username} onChange={(e)=>setalldata({...alldata,username:e.target.value})}/><br/>
//                 <label>Email</label>
//                 <input type="email" value={alldata.email} onChange={(e)=>setalldata({...alldata,email:e.target.value})}/><br/>
//                 <label>password</label>
//                 <input type="password" value={alldata.password} onChange={(e)=>setalldata({...alldata,password:e.target.value})}/><br/>
//                <input type="submit" value="Update"/>
//             </form>
//         </div>
//     );
// }

// export default EditForm;






import axios from 'axios';
import './editform.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
    const {id}=useParams();
    const navigate=useNavigate()
    const [alldata,setalldata]=useState({})

    useEffect(()=>{
        axios(`http://localhost:8001/getdata/${id}`)
        .then((res)=>{
            setalldata(res.data[0])
        }).catch((e)=>{
            console.log(e);
        })
    },[id])

    const handlesubmit=(e)=>{
e.preventDefault();
        axios.put(`http://localhost:8001/updatedata/${id}`,alldata)
        .then((res)=>{
            console.log(res);     
            alert("Updated!....")    
            navigate('/') 
        }).catch((e)=>{
            console.log(e);
        })
    }

    return (
        <div className='edit-form'>
            <h1>Edit Form</h1>
            <form onSubmit={handlesubmit}>
                <label>Usename</label>
                <input type="text" value={alldata && alldata.username} onChange={(e)=>setalldata({...alldata,username:e.target.value})}/><br/>
                <label>Email</label>
                <input type="email" value={alldata && alldata.email} onChange={(e)=>setalldata({...alldata,email:e.target.value})}/><br/>
                <label>password</label>
                <input type="password" value={alldata && alldata.password} onChange={(e)=>setalldata({...alldata,password:e.target.value})}/><br/>
               <input type="submit" value="Update"/>
            </form>
        </div>
    );
}

export default EditForm;
