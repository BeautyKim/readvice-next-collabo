
type Props = {
  // date: string
  onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
  onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void
}
export interface addCommentProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CommentWrite: React.FC<Props> = ({onSubmit, onChange}) => {
  return (
    <>
      <form onSubmit={onSubmit} >
        <input type='text' name='comment' placeholder='한줄평 입력' onChange={onChange}
          className="px-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker w-50" />
        <button type='submit'>등록</button>
      </form>
    </>
  )
}
