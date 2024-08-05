import { useState, useEffect } from 'react';
import { Card } from "flowbite-react";
function Home(){
  // const [state, setState] = useState(initialState)
  const [data, setData] = useState([])
  useEffect(()=>{
   const fetchdata = async() =>{
    try{
      let response = await fetch("https://fakestoreapi.com/products/");
      let finaldata = await response.json()
      setData(finaldata)
    }catch(e) {
      console.log(e.message)
    }
   }
   fetchdata()
  },[])
  return (
    <div>
      <h1>Blogs</h1>
      <div>
          {data.map(posts => (
            <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={posts.image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {posts.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {posts.description}
      </p>
    </Card>
            )
          )}
      </div>
    </div>
  )
}

export default Home


