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
    <section className='w-full'>
        <form onSubmit={onSubmit} >
            <div className=' h-96 rounded overflow-hidden shadow-lg mr-11'>
                <input type='text' placeholder='한줄평 입력' onChange={onChange} value={input}/>
                <button type='submit'>등록</button>
            </div>
        </form>
    </section>
    </>
  )
}
