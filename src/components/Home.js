import React from 'react';
import './home.css'; // Ensure you have your CSS file imported
import { useNavigate,Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {

  const[data,setdata]=useState([])
    const navigate=useNavigate();

    const navigateto=(url)=>{
        navigate(url)
    }

    function getdata(){
        axios.get('http://localhost:8001/userdata')
.then((response)=>{
    console.log(response.data)
    setdata(response.data)
}).catch((error)=>{
    console.log(error);
})
    }

    useEffect(()=>{
        getdata();
    },[])

    function handledel(id){
        axios.delete(`http://localhost:8001/delRecord/${id}`)
        .then((response)=>{
            console.log(response);
            getdata()
        }).catch((e)=>{
            console.log(e);
        })
    }

  return (
    <div>
      <main>
        <section className="hero">
          <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" alt="Beautiful beach view of the resort" width="1200" height="600" />
          <div className="hero-text">
          <h2 style={{ color: 'white' }}>Luxurious Rooms</h2>
            <p >Deluxe Rooms Starting At $299</p>
            <div><a href='/Room'className="original-button">Our Rooms</a></div> 
          </div>
        </section>
        <div class="container">
   <div class="featured-rooms">
    <h2>
     Featured Rooms
    </h2>
    <div class="room">
     <div class="price">
      $ 400
      <br/>
      per night
     </div>
     <img alt="Double Deluxe Room with a large bed and wooden interior" height="200" src="https://storage.googleapis.com/a1aa/image/uNGGc2qGx3KyFpRYADPF3vIZTI0R2x3SV0KqPf61jmVnHd4JA.jpg" width="300"/>
     <div class="description">
      Double Deluxe
     </div>
    </div>
    <div class="room">
     <div class="price">
      $ 500
      <br/>
      per night
     </div>
     <img alt="Family Deluxe Room with two beds and modern interior" height="200" src="https://storage.googleapis.com/a1aa/image/EHGn3OgfENTYB6z2ZxP7vt96lUrIHXcA8kwP2j9BXhApHd4JA.jpg" width="300"/>
     <div class="description">
      Family Deluxe
     </div>
    </div>
    <div class="room">
     <div class="price">
      $ 600
      <br/>
      per night
     </div>
     <img alt="Presidential Deluxe Room with luxurious interior" height="200" src="https://storage.googleapis.com/a1aa/image/5oryY1vTf5XufU6YqB8QxKjsYRexxofuiUT5WDTTL3XD9oDPB.jpg" width="300"/>
     <div class="description">
      Presidential Deluxe
     </div>
    </div>
   </div>
   <button onClick={()=>navigateto(-1)}>prev page</button>

   <table>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            </tr>   
            {
            data.map((item)=>{
                return(
                    <>
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        
                        <td><Link to={`/edit/${item._id}`}><button>Edit</button></Link></td>
                        <td><button onClick={()=>{
                            if(window.confirm('sure to want to delete')){
                                handledel(item._id)
                            }
                        }}>Delete</button></td>
                    </tr>
                    </>
                )
            })
            }        
        </table>
  </div>
      </main>
      <footer>
        <p>&copy; 2023 Beach Resort. All rights reserved.</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;