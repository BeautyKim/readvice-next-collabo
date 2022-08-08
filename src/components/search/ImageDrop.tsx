import { imageUpload } from '@/modules/controllers'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { DropZone } from './Dropzone'
import { Imagelist } from './Imagelist'

export const ImageDrop: React.FC = () => {
  const [isDropActive, setIsDropActive] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const onDragStateChange = useCallback((dragActive: boolean) => {
    setIsDropActive(dragActive);
  }, [])
  const onFilesDrop = useCallback((files: File[]) => {
    setFiles(files)
    console.log(files)
  }, [])
  const onClick = () => {
    const formData = new FormData();
    window.location.href = "/search"
    formData.append('files', files[0])
    try {
      axios.post(`${imageUpload}/search/upload`, formData, {
    }).then((response) => {
      response.data
      console.log(response.data)})
    }catch (error) {
      console.log(error)}
    }

  return (
    <div className='flex-container'>
      <DropZone
        onDragStateChange={onDragStateChange}
        onFilesDrop={onFilesDrop}
      >
        {files.length === 0 ? (
          <div>이 곳에 이미지를 올려주세요</div>
        ) : (
          <h3>등록된 이미지: {files.length}</h3>
        )}

        <Imagelist files={files} />
      </DropZone>
      <div className="mt-4">
        <button 
        type="button"
        className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={onClick}>이미지 전송</button>
      </div>
    </div>
  )
}