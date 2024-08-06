import { useState, useEffect, useRef, useCallback } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

function Home(){
  const refs = useRef(null);

  const changeBackground = () => {
    if (refs.current) {
      refs.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products/");
        let finaldata = await response.json();
        setData(finaldata);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 ref={refs} className="text-3xl font-bold my-8">Products</h1>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map(posts => (
          <Card
            key={posts.id}
            className="max-w-sm mx-auto"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={posts.image}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {posts.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {posts.description}
            </p>
            <Link to={`/singlepage/${posts.id}`}>Single Product</Link>
            
          </Card>
        ))}
      </div>
      <button onClick={changeBackground} className="mt-8 p-2 bg-blue-500 text-white rounded">Click ColorChange</button>
    </div>
  );
}

export default Home;
