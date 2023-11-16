'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '@/Component/Navbar'

const UserCreation = () => {
    
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const [createdAt, setCreatedAt] = useState('')
    useEffect(() => {
        const interval = setInterval(() => {
            const timestamp = new Date().toISOString();
            setCreatedAt(timestamp);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const sendDetails = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/createUser', userDetails)
            if (res.status === '200') {
                console.log('Data sent successfully')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = (e) => {

        e.preventDefault()
        userDetails.createdAt = createdAt
        sendDetails()
        console.log("UserDetails", userDetails, createdAt)

    }
    return (
        <div>
            <Navbar/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                    </label>
                    <input type="text" className = "input-field" value={userDetails.username} onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            username: e.target.value
                        })
                    }} />
                </div>
                <div>
                    <label>
                        Password:
                    </label>
                    <input type="password" value={userDetails.password} onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            password: e.target.value
                        })
                    }} />
                </div>
                <div>
                    <label>
                        Phone No.:
                    </label>
                    <input type="text" value={userDetails.phone} onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            phone: e.target.value
                        })
                    }} />
                </div>
                <div>

                    <label>
                        Email:
                    </label>
                    <input type="email" value={userDetails.email} onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            email: e.target.value
                        })
                    }} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserCreation