import React, { useState } from "react";

function Article(){
    const [count,setCount]=useState(0)
    const [count,setAge]=useState(0)
    const [count,setName]=useState(0)

    const handleIncrement=()=>{
        setCount(count+1)
        console.log(count)
    }
  return (
    <div>
        <h2>Article</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa rem delectus voluptatum voluptatibus non iusto molestiae ipsum reiciendis culpa soluta.</p>
        <h2>[count]</h2>
        <button onClick={handleIncrement}>Increment</button>
    </div>

  )
}
export default Article
