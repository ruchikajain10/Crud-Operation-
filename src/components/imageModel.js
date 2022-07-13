import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'

const customStyles={
    content:{
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

export const ImageModel = (props) => {
    const [inputValue,SetInputValue]=useState(props.post.name)

    const handleChange=(e)=>{
        SetInputValue(e.target.value)
    }

  return (
    <div>
        <Modal isOpen={props.isVisibleModal} style={customStyles} ariaHideApp={false}>
            <img width={300} height={250} src={props.post.avatar} alt='deepak'/>
            <p>  <b>{props.post.id}</b> : <i> {props.post.name} </i></p>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={()=>props.updateModal(props.post.id,inputValue)}>Submit!!!</button>
            <button onClick={props.closeModal}>Close</button>

        </Modal>
    </div>
  )
}
