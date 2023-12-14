import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'

function PhoneDetails({phonesList}) {
    const navigate = useNavigate()

    const [phoneDetails, setPhoneDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const {phoneId} = useParams()
    
    useEffect(()=>{
        getData()
    }, [phoneId])

    const getData = async () => {
        setLoading(true)
        const phone = phonesList.find(eachPhone => eachPhone.id === Number(phoneId))

        if (!phone) {
            navigate("/not-found")
            return 
        }
        setPhoneDetails(phone)
        setLoading(false)
    }
    if(loading){
        return <RingLoader/>
    }
    const {
        name, 
        manufacturer,
        description,
        color,
        price,
        screen,
        processor,
        ram,
        imageFileName,
    } = phoneDetails

    return (
    <div>
        <img src={`images/${imageFileName}`} alt="img" />
        <p>{name} by {manufacturer} </p>
        <p>{description}</p>
        <p>Color: {color} </p>
        <p>{screen} </p>
        <p>Processor:{processor}, Ram: {ram} </p>
        <p>Price:{price} </p>
      +
    </div>
  )
}

export default PhoneDetails