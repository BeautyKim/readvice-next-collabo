import { logoutRequest } from '@/modules/slices'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

type Props = {
  className?: string | undefined
}

export const Logout:React.FC<Props> = ({className}: Props) => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(logoutRequest)
    console.log(JSON.stringify(dispatch))
  }, [dispatch])
  return (
    <button onClick={handleClick} className={className}>Logout</button>
  )
}