
const initialState={
    posts:[],
    error:"",
    register:[],
}
const Reducers = (state = initialState,action) => {
    console.log(666666666, action.type);
    console.log(666611111, action.payload);

    switch (action.type) {
      case "GET_POST":
        return { ...state, posts: action.payload };

      case "ADD_POST":
        return { ...state, posts: state.posts.concat(action.payload) };

      case "DELETE_POST":
        const deletedPost = state.posts.filter((post) => {
          if (post.id !== action.payload) {
            return post;
          }
        });
        return { ...state, posts: deletedPost };

      case "UPDATE_POSTS":
        const post = state.posts.find((post) => post.id === action.payload.id);
        post.name = action.payload.name;
        const post2 = state.posts.map((post3) => {
          if (post3.id === action.payload.id) {
            return post;
          } else {
            return post3;
          }
        });
        return { ...state, posts: post2 };
        
      case "GET_ERROR":
        return { ...state, error: action.payload };
      case "GET_FORM":
        return { ...state, register: action.payload };
      default:
        return state;
    }
}

export default Reducers;