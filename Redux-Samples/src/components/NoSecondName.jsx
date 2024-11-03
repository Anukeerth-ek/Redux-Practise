import React, { useContext } from 'react'
import MyContext from './MyContext'

export const NoSecondName = () => {
    const userName = useContext(MyContext)
  return (
    <div>{userName}</div>
  )
}
