import { addComment } from '@/modules/comments'
import { useAppSelector } from '@/modules/store'
import { stat } from 'fs'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function CommentWrite(){
  const [ comment, setComment ] = useState('')
  const dispatch = useDispatch()
  const commentItem = useSelector((state) => state)

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(addComment(comment))
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setComment(e.target.value)
  }

  return (
    <>
    <section>
      {commentItem.map(item => {
        <div key={item.id}>
          <p>{item.comment}</p>
          <p>{item.reg_date}</p>
        </div>
      })}
    </section>
    <section className='w-full'>
        <form onSubmit={onSubmit} >
            <div className=' h-96 rounded overflow-hidden shadow-lg mr-11'>
                <input type='text' placeholder='한줄평 입력' onChange={onChange}/>
                <button type='submit'>등록</button>
            </div>
        </form>
    </section>
    </>
  )
}
