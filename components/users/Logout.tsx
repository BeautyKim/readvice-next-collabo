import { logoutRequest } from '@/modules/slices'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'


export const Logout:React.FC = () => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(logoutRequest)
    console.log(JSON.stringify(dispatch))
  }, [dispatch])
  return (
    <button onClick={handleClick}>Logout</button>
  )
}