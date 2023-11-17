import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import Navbar from '@/components/Navbar'
import { usePDF } from 'react-to-pdf';
import Modal from '../components/Modal'
import { ClockLoader } from 'react-spinners';
import users from '../DummyDB/Users.json'
const UserTable = () => {

    const [data, setData] = useState([])
    const [searchMail, setSearchMail] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedUser , setSelecteddUser] = useState({})
    const { toPDF, targetRef } = usePDF({ filename: 'report.pdf' });
    
    const openModal = (user) => {
        setModalOpen(true);
        setSelecteddUser(user)
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const headers = [
        { key: 'id', text: 'S.No' },
        { key: 'username', text: 'Username' },
        { key: 'email', text: 'Email' },
        { key: 'phone', text: 'Phone No.' },
        { key: 'joinedOn', text: 'Joined On' },
    ];
    const getData = async () => {

        // IF WE WANT TO RETRIEVE AND SEARCH DATA FROM ACTUAL DATABASE WE CAN DO SO LIKE THIS

        // try {
        //     const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/getUser?email=${searchMail}`
        //     const res = await axios.get(url)
        //     if (res.status === 200) {
        //         setData(res.data)
        //         setIsLoading(false)
        //     }
        //     else {
        //         setData([])
        //         setIsLoading(false)
        //     }
        // } catch (error) {
        //     setData([])
        //     setIsLoading(false)
        // }

        //SEARCHING IN DUMMY DATA

        const searchRes = []
        users.forEach((user) => {
            if (user.email.includes(searchMail))
                searchRes.push(user)
        })
        setData(searchRes)
        setIsLoading(false)

    }
    useEffect(() => {
        getData()
    }, [searchMail])


    return (

        <div className='w-3/5 mx-auto mb-6'>
            <Navbar />
            <div >
                <input type="text" value={searchMail} onChange={(e) => { setSearchMail(e.target.value) }} className='input-field' placeholder='Search by email' />
                {!isLoading ? (
                    <>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-800">
                                <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-500 dark:text-gray-100">
                                    <tr>
                                        {headers.map(header => (
                                            <th key={header.key} scope="col" className="px-6 py-3">
                                                {header.text}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((ele, idx) => (
                                        <>
                                            <tr className="bg-white border-b dark:border-gray-700 hover:bg-gray-300" onClick={() => { openModal(ele) }} key={idx}>
                                                <td className="px-6 py-4"> {idx + 1} </td>
                                                <td className="px-6 py-4"> {ele.username}</td>
                                                <td className="px-6 py-4"> {ele.email}</td>
                                                <td className="px-6 py-4"> {ele.phone}</td>
                                                <td className="px-6 py-4"> {ele.created_at}</td>
                                            </tr>

                                        </>
                                    ))}
                                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                                        <div ref={targetRef}>
                                            <div className='mb-2 text-lg'> E-mail = {selectedUser?.email}</div>
                                            <div className='mb-2 text-lg'> Username = {selectedUser?.username}</div>
                                            <div className='mb-2 text-lg'> Phone = {selectedUser?.phone}</div>
                                            <div className='mb-2 text-lg'> Joined on = {selectedUser?.created_at}</div>
                                        </div>
                                        <button onClick={() => toPDF()} className='button'> Download Report </button>
                                    </Modal>
                                </tbody>
                            </table>
                        </div>

                    </>
                ) : <ClockLoader color={'#36D7B7'} isLoading={isLoading} size={150} className="mx-auto" />}

            </div>
        </div >
    )
}
export default UserTable