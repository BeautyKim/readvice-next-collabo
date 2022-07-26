import { addCommentRequest } from "@/modules/slices"
import { Comment } from "@/modules/types"
import { useState } from "react"
import { useDispatch } from "react-redux"


export const CommentWrite: React.FC = () => {
  const [ comment, setComment ] = useState<Comment>({ comment: ""})
  const dispatch = useDispatch()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.target
    setComment({...comment, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addCommentRequest(comment))
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input type='text' name='comment' placeholder='한줄평 입력' onChange={handleChange}
          className="px-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker w-50" />
        <button type='submit'>등록</button>
      </form>
    </>
  )
}
