
type Props = {
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    text: string
}

export const Comment: React.FC<Props> = ({onClick, text}: Props) => {


  return (
    <>
    <div className="min-h-full flex-column justify-content">
        <div className='h-48 p-3 mx-10 my-3 text-center bg-white rounded shadow-xl'
                onClick={onClick}>
            {text}
        </div>
            {/* <button className="">공유하기</button> */}
    </div>
    </>
  )
}
