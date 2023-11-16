import React, { useState } from 'react'
import { usePDF } from 'react-to-pdf';
import Modal from './Modal'

const TableRow = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { toPDF, targetRef } = usePDF({ filename: 'report.pdf' });
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <tr onClick={openModal}>
        <td>{props.id}</td>
        <td>{props.ele.username}</td>
        <td>{props.ele.email}</td>
        <td>{props.ele.phone}</td>
        <td>{props.ele.created_at}</td>
      </tr>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div ref={targetRef}>
          <div> Username = {props.ele.username}</div>
          <div> E-mail = {props.ele.email}</div>
          <div> Phone = {props.ele.phone}</div>
          <div> Joined on = {props.ele.created_at}</div>
        </div>
        <button onClick={() => toPDF()}> Download Report </button>
      </Modal>
    </>
  )
}

export default TableRow