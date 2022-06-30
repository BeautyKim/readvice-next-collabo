import { useState } from "react"

interface Props {
    children: React.ReactNode
}

const useModal = () => {
    const [ showModal, setShowModal ] = useState(false)
    
    const activeModal = () => {
        setShowModal(!showModal)
    }
    const useModal = () => {
      return (
        <div>useModal</div>
      )
    }
    

  return {
    showModal,
    activeModal
  }
}

export default useModal