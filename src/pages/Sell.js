import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddHome from '../services/AddHome'
import AuthService from '../services/auth.service'
import './sell.css'
const Sell = () => {
  const [currentUser,setCurrentUser] = useState()
  const navigate = useNavigate()
  useEffect(()=>{
     const user = AuthService.getCurrentUser()
     if(user){
      setCurrentUser(user)
     }
     else{
       navigate("/loginmsg")
     }

  },[])

  return (
    <div className='py-5'>
      
    {currentUser && <AddHome/>}
      
    </div>
    
    
   )
}

export default Sell