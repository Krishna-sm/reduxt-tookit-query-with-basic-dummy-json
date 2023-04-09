import './App.css'
import { useGetAllPostQuery } from './services/posts'

function App() {
  const {data,isError,isLoading} = useGetAllPostQuery();
  console.log(useGetAllPostQuery())

  if(isLoading)
  {
    return <h1>loading...</h1>
  }
  if(isError)
  {
    return <h1>error occured</h1>
  }
  return (
    <div className="App">
      {data && data.map((cur,i,arr)=>{
        return      <div className="data">
              <h4>{cur.title}</h4>
              <h6>{cur.body}</h6>
        </div>
      })}
 
    </div>
  )
}

export default App
