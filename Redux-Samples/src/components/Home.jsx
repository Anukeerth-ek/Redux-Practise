import React, { useContext } from 'react'
import  MyContext  from './MyContext'
import NoName from './NoName'


const Home = () => {
    const userName = useContext(MyContext)
  
  return (
    <div>fff
        {userName}
        <NoName/>
    </div>
  )
}

export default Home