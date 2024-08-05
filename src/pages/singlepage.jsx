import axios from 'axios'
import React,{useState, useEffect}  from 'react'

const SingeProduct = () => {
const [data, setData] = useState({})
  useEffect(()=>{
   const fetchdata = async() =>{
    try{
      let res = await axios.get(`https://fakestoreapi.com/products/1`);
      console.log(res)
      setData(res.data)
    }catch(e) {
      console.log(e.message)
    }
   }
   fetchdata()
  },[])
  return (
    <div>
        <h1>{data.id}</h1>
        <h1>{data.title}</h1>
        <img src={data.image} alt=""  width={100}/>
        <h3>Price : {data.price}</h3>
        <p>{data.description}</p>
    </div>
  )
}

export default SingeProduct