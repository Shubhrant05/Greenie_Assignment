import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableRow from '../Component/TableRow'
import Navbar from '@/Component/Navbar'

const UserTable = () => {
    
    const [data, setData] = useState([])
    const [searchMail, setSearchMail] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const getData = async () => {
        const res = await axios.get(`http://localhost:3001/api/getUser?email=${searchMail}`)
        setData(res.data)
        setIsLoading(false)
        console.log("kjkhj", searchMail)
    }
    useEffect(() => {
        getData()
    }, [searchMail])

    return (
        
        <div>
            <Navbar />
            
            <input type="text"  value={searchMail} onChange={(e) => { setSearchMail(e.target.value) }} />
            {!isLoading ? data?.map((ele, idx) => {
                return (
                    <table key={idx}>
                        <tbody>
                            <TableRow id={idx + 1} ele={ele} />
                        </tbody>
                    </table>
                )
            }) : <h3>Content is Loading</h3>}
        </div>
    )
}

export default UserTable