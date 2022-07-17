export interface UserType {
    email: string, password: string, username?: string, birth?: string, gender?: string
}

export interface UserJoinType{
    type: string;
    payload: {
        email: string, password: string, username: string, birth: string, gender: string
    }
}

export interface LoginType {
    type: string;
    payload: {
        email: string, password: string}
}