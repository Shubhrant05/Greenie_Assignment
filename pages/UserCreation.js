'use client'


import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import Navbar from '@/components/Navbar'

const UserCreation = () => {
    const initialDetails = {
        username: "",
        email: "",
        phone: "",
        password: ""
    }
    const [userDetails, setUserDetails] = useState(initialDetails)
    const [createdAt, setCreatedAt] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const timestamp = new Date().toISOString();
            setCreatedAt(timestamp);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // IF WE WANT TO ADD USERS TO ACTUAL DB SUCH AS MONGODB HERE IS THE SAMPLE CODE FOR THAT but since in the assignment it was only mentioned to implement dummy request handling so I have avoided it here

    const sendDetails = async () => {
        // try {
        //     const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/createUser`, userDetails)
        //     if (res.status === '200') {
        //         console.log('Data sent successfully')
        //     }
        // } catch (error) {
        //     console.log(error)
        // }


        alert("User added successfully!")
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        userDetails.created_at = createdAt
        sendDetails()
        setUserDetails(initialDetails)

    }

    return (
        <div className='w-3/5 mx-auto '>
            <Navbar />
            <form onSubmit={handleSubmit} className='mx-auto'>
                <div>
                    <input required type="text" className="input-field" value={userDetails.username} onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            username: e.target.value
                        })
                    }} placeholder='Username' autoComplete='off' />
                </div>
                <div>
                    <input required type="password" className="input-field" value={userDetails.password} onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            password: e.target.value
                        })
                    }} placeholder="Password" autoComplete='off' />
                </div>
                <div>
                    <input required type="text" className="input-field" value={userDetails.phone} onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            phone: e.target.value
                        })
                    }} placeholder="Phone No." autoComplete='off' />
                </div>
                <div>
                    <input required type="email" className="input-field" value={userDetails.email} onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            email: e.target.value
                        })
                    }} placeholder="E-Mail" autoComplete='off' />
                </div>
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserCreation