import { ReactNode } from "react";

export interface Layout {
  children?: ReactNode
}
export interface onProps{
  onSubmit: (e : React.FormEvent<HTMLFormElement>) => void
  onChange: (e : React.ChangeEvent<HTMLInputElement> ) => void
}

export interface Book {
  isbn: number;
  author: string;
  book_title: string;
  book_info?: string;
  book_img?: string;
  library_name?: string;
  category?: string;
  price?: number;
}
export interface Search {
  searchState?: boolean
  query: string
  title?: string
  author?: string
  publisher?: string
  page?: number
  isDetail?: boolean
}
export interface KakaoBook {
    authors?: string[]
    contents?: string
    datetime?: string
    isbn?: number
    publisher?: string
    sale_price?: number
    title: string
    translators?: string[]
    url?: string
}

export interface User {
  email?: string, 
  password?: string,
  cpassword?: string, 
  username?: string, 
  birth?: string, 
  gender?: string, 
  token?: string, 
  roles?: any
}

export interface Comment {
  comment_id?: string;
  comment?: string;
  reg_date?: number;
  auto_recode?: string;
  email?: string;
  isbn?: string;
}


export type TagType= {
  tagList: string[];
  addTag: any;
  removeTag: any;

}


