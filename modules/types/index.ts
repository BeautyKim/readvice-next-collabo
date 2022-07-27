import { ReactNode } from "react";

export interface Layout {
  children?: ReactNode
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


