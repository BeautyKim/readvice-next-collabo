import { Layout } from '@/modules/types'
import React from 'react'
import { MyNav } from './MyNav'

const MyLibraryLayout = ({ children }: Layout) => {
  return (
    <>
      <MyNav />
      { children }
    </>
  )
}

export default MyLibraryLayout