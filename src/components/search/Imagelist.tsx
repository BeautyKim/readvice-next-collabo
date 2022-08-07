import React from 'react'

export interface FileListProps {
  files: File[];
}

export const Imagelist: React.FC<FileListProps> = (props: React.PropsWithChildren<FileListProps>) => {
    
    return (
        <>
        <ul>
            {props.files.map((file: File) => (
            <li key={`${file.name}_${file.lastModified}`}>
                <span>{file.name}</span>
                {' '}
                <span>({Math.round(file.size / 1000)}kb)</span>
            </li>
            ))}
        </ul>
        </>
    )
}