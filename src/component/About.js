import React, {useEffect, useState} from 'react'
import AboutClassBased from './class component/AboutClassBased'

export default function About() {

  const [count,setCount] = useState(0);

  useEffect(() =>{
    const timer = setInterval(() =>{
      console.log("function component timer is called")
    },1000);

    return () => {
      clearInterval(timer);
      console.log("unmouting is called")
    };
  }
  ,[])

  return (
    <div className='d-flex flex-column bg-white justify-content-center align-items-center m-5 py-5 text-dark'>
      {/* <p className='bg-primary text-center'>About Page</p> */}

      <h6>function based component content start</h6>

      <h3>Count: {count}</h3>
      <button className='btn btn-primary' onClick={() =>{setCount(count +1)}}>Increase Count</button>

      <h6>function based component content end</h6><br/><br/>

      {/* <AboutClassBased name="khimsuriya" address="Sihor, Bhavnagar, 364240"/> */}
      {/* <AboutClassBased name="vinay" address="Sihor, Bhavnagar, 364240" message="second"/> */}
      {/* <AboutClassBased name="Vansh" address="Sihor, Bhavnagar, 364240"/> */}
    </div>
  )
}
