import Link from 'next/link'
import Layout from '../components/Layout'
import { useState } from 'react'

const IndexPage = () => {
const [toDo, setToDo] = useState("")
const [toDos, setToDos] = useState([])

const onChange = (e) => setToDo(e.target.value)
const onSubmit = (e) => {
  e.preventDefault()
  if(toDo === "") {
    return
  }
  setToDos((curArr)=> [toDo, ...curArr])
  setToDo("")
}

return ( 
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>My To Dos {toDos.length} 개나 남았네!</h1>
    <p>
      <Link href="/coin">Go Coin</Link>
    </p>
   <form onSubmit={onSubmit}>
      <input 
        onChange={onChange}
        value={toDo}
        type='text'
        placeholder='여기에 적어'
        ></input>
      <button  type='submit'>Add To Do</button>
   </form>
   <ul>
    {toDos.map((item,idx)=>{ 
      return (
        <li key={idx}>{item} </li>
        
      )
     })}
   </ul>
  </Layout>
  )
}

export default IndexPage
