export interface UserType {
    email: string, password: string, userName: string, birth: string, gender: string
}

export interface UserJoinType{
    type: string;
    payload: {
        email: string, password: string, userName: string, birth: string, gender: string
    }
}