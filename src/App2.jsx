import React, { useState } from 'react'
import { useGetAllPostByIdQuery } from './services/posts'

const App2 = () => {
  const [id,setId]=useState(1);
  const {data,isError,isLoading} = useGetAllPostByIdQuery(id);
 
  if(isLoading)
  {
    return <h1>loading...</h1>
  }
  if(isError)
  {
    return <h1>error occured</h1>
  }
  return (
    <div className='App'>
      
      <input type="number"  onChange={(e)=>setId(e.target.value)} /> 
      {/* {data && data.map((cur,i,arr)=>{ */}
      {isLoading && <h1>wait....</h1>}
         { data && <div className="data">
              <h4>{data.title}</h4>
              <h6>{data.body}</h6>
        </div>}
      {/* })} */}
    </div>
  )
}

export default App2