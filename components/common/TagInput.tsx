import { TagType } from '@/modules/types'
import React, { useState } from 'react'

function TagInput({ tagList, addTag, removeTag} : TagType) {
    const [tag, setTag] = useState("")
    const handleChangeTag = (e: { target: { value: React.SetStateAction<string> } }) => {
        setTag(e.target.value)
    }
    const handleTagKeyPress = (e: { preventDefault: () => void; key: string }) => {
      e.preventDefault()
      if (e.key === 'Enter'){
        handleAddTag()
      }
    }
    const handleAddTag = () => {
      if (!!tag) {
        addTag(tag);
        setTag("");
      }
    };
    const handleRemoveTag = (tag: string) => {
      removeTag(tag);
    };

  return (
    <>
      <fieldset>
        <input
          className="form-control"
          type="text"
          placeholder="Enter tags"
          value={tag}
          onChange={handleChangeTag}
          onBlur={handleAddTag}
          onKeyPress={handleTagKeyPress}
        />

        <div className="tag-list">
          {tagList.map((tag, index) => (
            <span className="tag-default tag-pill" key={index}>
              <i
                className="ion-close-round"
                onClick={() => handleRemoveTag(tag)}
              />
              {tag}
            </span>
          ))}
        </div>
      </fieldset>
    </>
    
  )
}

export default TagInput