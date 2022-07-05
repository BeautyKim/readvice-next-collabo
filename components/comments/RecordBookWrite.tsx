import Link from 'next/link'
import React, { useState } from 'react'

const RecordBookWrite = ({}) => {

    const [todos, setTodo] = useState([])
    const [input, setInput] = useState('')
    const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setInput(e.target.value)
    }

  return (
    <>
        <div className='flex place-content-center space-x-10 mx-36 mt-24'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Link href="/comments/recordBookWrite">
                            <img className="w-full" src='http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg' alt="Sunset in the mountains" /></Link>
                        <div className="px-2 py-1">
                            <div className="font-bold text-xl mb-2">작별인사</div>
                            <p className="text-gray-700 text-base">
                                지금까지의 한줄평 : 3<br/>
                                2022-07-05 김영하 최고
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
            </div>
            <div className='w-full'>
                <button>내보내기</button>
                <div className=' h-96 rounded overflow-hidden shadow-lg mr-11'>
                    <h2>2022-07-05</h2>
                    <p>김영하 최고</p>
                    <p>엉엉 너무 슬프다</p>
                    <h2>2022-07-06</h2>
                    <p>ㅋㅋㅋㅋㅋㅋㅋ</p>
                    <p>ㅠㅠㅠㅠㅠ</p>
                    {todos.map((todo, idx) => {
                        return <p key={idx}>{todo}<button>삭제</button></p>})}
                    <form>
                        <input type='text' value={input} onChange={handleChange}/>
                    </form>
                    <button>등록</button>
                </div>
            </div>
        </div>
    </>
  )
}
export default RecordBookWrite