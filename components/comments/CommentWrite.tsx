import { addComment } from '@/modules/comments'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function CommentWrite(){
  const [ input, setInput ] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const text = input.trim()
    setInput('')
    dispatch(addComment(text))
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  return (
    <>
      <form onSubmit={onSubmit} >
        <input type='text' placeholder='한줄평 입력' onChange={onChange} value={input}/>
        <button type='submit'>등록</button>
      </form>
    </>
  )
}
