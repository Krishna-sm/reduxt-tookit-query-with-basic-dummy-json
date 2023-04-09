import React from 'react'
import { useCreateUserMutation, useDeletePostByIdMutation, useUpdatePostByIdMutation } from './services/posts'

const App3 = () => {
  // const [updatePost,response] = useUpdatePostByIdMutation();
  // const [deletePost,response] = useDeletePostByIdMutation();
  const [createPost,response] = useCreateUserMutation();
  const user ={
    userId:102,
    id:1,
    title:"this is Krishna",
    body:"hare ram"
  }
  // console.log(updatePost(5))
  console.log({error:response.error,success:response.isLoading,data:response.data,response})
  return (
    <div>
      {/* <button onClick={()=>updatePost(5)}>click me </button> */}
      {/* <button onClick={()=>deletePost(5)}>delete id 5 </button> */}
      <button onClick={()=>createPost(user)}>Send data</button>
    </div>
  )
}

export default App3