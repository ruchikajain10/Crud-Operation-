import axios from "axios"
const GET_POST="GET_POST"
const ADD_POST="ADD_POST"
const DELETE_POST="DELETE_POST"
const UPDATE_POSTS = "UPDATE_POSTS";
const GET_ERROR="GET_ERROR"


export const getPost = () => {
    // console.log("getPost action wala page")
  return (dispatch)=>{
    axios.get(`https://624597e46b7ecf057c20c170.mockapi.io/posts`)
   .then((res)=>{
    //    console.log("res from get api",res.data)
       dispatch(getPostSuccess(res.data))
   }).catch((error)=>{
       dispatch(getError(error.message))
   });
    };
  }
  export const getForm = (data) => {
     console.log(5555500000,data)
       return {
         type: "GET_FORM",
         payload: data
       };
    };
  
  export const deletePost = (id) => {
    return (dispatch)=>{
        axios.delete(`https://624597e46b7ecf057c20c170.mockapi.io/posts/${id}`)
        .then((res)=>{
            dispatch(deletePostSuccess(id))
        }).catch((error)=>{
            dispatch(getError(error.message))
        })
    }
  }
  export const addPost = (name) => {
    return (dispatch)=>{
        axios.post(`https://624597e46b7ecf057c20c170.mockapi.io/posts`, { name })
        .then((res)=>{
            dispatch(addPostSuccess(res.data))
        }).catch((error)=>{
            dispatch(getError(error.message))
        })
    }
  }
  export function updatePost(id,name) {
    // const updatedName={name:name}
    return function (dispatch) {
      axios
        .put(`https://624597e46b7ecf057c20c170.mockapi.io/posts/${id}`,{name})
        .then((resp) => {
          // console.log("deletePost11", resp.data);
          dispatch(updatePostSuccess(resp.data));
        })
        .catch((error) => {
          console.log(99999, error.message);
          dispatch(getError(error.message));
        });
    };
  }

  const getPostSuccess=(data)=>{
      return{
          type:GET_POST,
          payload:data
      }
  }
  const deletePostSuccess=(data)=>{
      return{
          type:DELETE_POST,
          payload:data
      }
  }
  const addPostSuccess=(data)=>{
      return{
          type:ADD_POST,
          payload:data
      }
  }
  const updatePostSuccess = (data) => {
    return {
      type: UPDATE_POSTS,
      payload: data,
    };
  };

  const getError=(data)=>{
      return{
          type:GET_ERROR,
          payload:data
      }
  }
