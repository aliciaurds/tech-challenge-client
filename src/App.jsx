
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import PhoneDetails from './pages/PhoneDetails'
import Home from './pages/Home'
import Error from './pages/Error'
import NotFound from './pages/NotFound'
import { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'
import axios from 'axios'

function App() {
    const [phonesList, setPhonesList] = useState([])
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    
    useEffect(()=>{
        getData()
    },[])

    const getData = async () => {
        try {
            const response = await axios.get ("http://localhost:5173/api/phones")
            console.log(response.data);
            setPhonesList(response.data)
            setLoading(false)
        }
        catch(err){
            console.log(err);
            navigate("/error")
        }
    }
    if (loading) {
        return  <RingLoader/>
    }


  return (
    <div>
        <Navbar phonesList = {phonesList}/>

        <div>
            <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/details/:phoneId" element = {<PhoneDetails phonesList = {phonesList}/>}/>

            <Route path ="/error" element = {<Error/>}/>
            <Route path='*' element = {<NotFound/>}/>
            
            </Routes>

        </div>
     
    </div>
  )
}

export default App
