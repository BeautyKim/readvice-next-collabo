import { imageUpload } from '@/modules/apis'
import axios from 'axios'
import { on } from 'events'
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
  }, [])
  const onClick = () => {
    const formData = new FormData();
    alert(' formData >> '+formData)
    formData.append('files', files[0])
    try {
      axios.post(`${imageUpload}/search/upload`, formData, {
    }).then((response) => {
      response.data})
    }catch (error) {
      console.log(error)}
    }

  return (
    <div>
      <DropZone
        onDragStateChange={onDragStateChange}
        onFilesDrop={onFilesDrop}
      >
        <h2>아직 ui추가를 하지 못했습니다<br/>
          `[이곳에 이미지를 올려주세요]`
        </h2>

        {files.length === 0 ? (
          <h3>이미지가 없습니다</h3>
        ) : (
          <h3>등록된 이미지: {files.length}</h3>
        )}

        <Imagelist files={files} />
      </DropZone>
      <div>
        <button onClick={onClick}>임시로 이미지 보내는 버튼<br/>
        추후 검색창 onSubmit과 합칠 예정</button>
      </div>
    </div>
  )
}