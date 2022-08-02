import React, { useRef } from 'react'

export const ImageDrop: React.FC = () => {

      const onChangeImg = (e:any) => {

      }
  return (
    <>
        <form>
            <label htmlFor="profile-upload" />
            <input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg}/>
        </form>
    </>
  )
}
