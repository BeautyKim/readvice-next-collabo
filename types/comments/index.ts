import React from "react";

export interface CommentType {
    id?: string;
    email: string;
    isbn?: number;
    comment: string;
    reg_date?: string;
    auto_recode?: string;
}

export interface addCommentProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface TagType {
    tagList: string[];
    addTag: any;
    removeTag: any;

}