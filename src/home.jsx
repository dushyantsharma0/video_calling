import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = () => {
       if(name==''){
        alert('Please enter your name');
       }else{
        navigate(`/room/${name}`);
       }
     
    }
  
    return (
      <>
        
        <div className='mdiv' style={{width:'100%' , height:'97vh', backgroundColor:'red'}}>
        <input className='inpt' placeholder='enter your name'
          type="text"
          onChange={(e) => setName(e.target.value)} 
        />
  
        <button className='btn' onClick={handleSubmit}>Start Call</button>
        

        </div>
      </>
    )
  }
  
  export default Home;