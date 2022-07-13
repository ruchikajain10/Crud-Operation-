import './Data.css'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost,deletePost,addPost,updatePost } from '../redux/actions/actionCreator'
import { ImageModel } from './imageModel'
import { useState } from 'react'
// import { Link } from 'react-router-dom';

const Data = () => {
const [addValue,SetAddValue]=useState("")
let [post,Setpost]=useState([])
const [blankError,SetBlankError]=useState("")
const [isVisibleModal,setIsVisibleModal]=useState(false)
const posts=useSelector(state=> state.Reducers.posts)
const error=useSelector(state=> state.Reducers.error)
const [test,Settest]=useState("")
   
const dispatch=useDispatch()

const deletePosts=(id)=>{
  console.log("clicked",id)
   dispatch(deletePost(id))
}
useEffect(() => {
  console.log("useEffect")
  
  dispatch(getPost())
  // console.log("aaaaaaa",test)

}, [])
// useEffect(() => {
//   console.log("useEffect")
  
//   updateModal()
//   // console.log("aaaaaaa",test)

// }, [posts])

const addClick=(data)=>{
  const a=data
  if(a===""){
    SetBlankError("Please write Something")
  }
  else{
    dispatch(addPost(data))
    SetAddValue("")
    
  }
}
const openModal=(id)=>{
  const post2=posts.find((post1)=>post1.id===id)
  Setpost(post=post2)
  setIsVisibleModal(true)
  console.log("clicked image")
}
const closeModal=()=>{
  setIsVisibleModal(false)
  console.log("close image")
}
const handleChange=(e)=>{
  SetAddValue(e.target.value)
}

const updateModal=(id,name)=>{
  console.log(id,name)
  dispatch(updatePost(id,name))
  setIsVisibleModal(false)
}
// const handleChange2=(e,id)=>{

// // console.log("handle2",e.target.value)
// // Settest(e.target.value)

// }

  return (
    <div>
       <h2 style={{textAlign:"center"}}> Crud Operation through Api Axios with React-Redux-Hooks</h2>
      {/* <Link to="/form">Form</Link> */}
      {
        isVisibleModal&&
        <ImageModel updateModal={updateModal}post={post} isVisibleModal={isVisibleModal} closeModal={closeModal} />
      }
      <div>
        <div style={{textAlign:"center",color:"red"}}>
        <input type="text" value={addValue} onChange={handleChange} />
        <button onClick={()=>addClick(addValue)} >  Add!!!</button><br/>
        <span> {blankError}</span>
        </div>
        {
          error ? 
          <h1 style={{color:"red"}}> {error}</h1> :
          posts.map((post,index)=>{
            return(
              <div className="column" >
              <div className="row"></div>
              <div key={index}>
                <div>
                  <img onClick={()=>openModal(post.id)} src={post.avatar}  height={200} width={200}/>
                  <p> <b>{post.id}</b> : {post.name}</p>
                  {/* <input type="text" value={test} onChange={handleChange2}></input> */}
                  <button onClick={()=>deletePosts(post.id)}> Delete!!!</button>
                </div>
              </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Data