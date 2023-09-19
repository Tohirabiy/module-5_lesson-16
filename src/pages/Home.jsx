import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [number ,setNum]=useState(0);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>setData(data))
setTimeout(()=>{
setLoading(true);

},200)

// mashetni tushunish .then(data=>setData(data))




    console.log("mounting !");
    return ()=>{
console.log("Unmounting");
    }
  }, [number]);
  // updating data









  if(!loading){
    return <h1>loading</h1>

  }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={()=>setNum(number+1)}>++</button>
      <h1>Home page</h1>
      <div>
        {data.map(post=>(
            <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
