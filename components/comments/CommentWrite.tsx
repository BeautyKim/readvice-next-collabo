import { onProps } from "@/modules/types"

export const CommentWrite: React.FC<onProps> = ({onSubmit, onChange}: onProps) => {
  return (
    <>
      <form onSubmit={onSubmit} className="flex justify-center">
        <input type='text' name='comment' placeholder='한줄평 입력' onChange={onChange}
          className="w-6/12 p-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker " />
          <button 
            type='submit'
            className="inline-flex w-20 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md shadow hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">생성</button>
      </form>
    </>
  )
}
