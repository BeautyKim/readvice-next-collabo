export interface UserState{
    data: any
    status: 'idle' | 'loading' | 'failed'
    isLoggined: boolean
    error: any
}
export interface LoginState{
    data: UserType[]
    loginedUser: null,
    token: string,
    isLoggined: boolean,
    status: 'idle' | 'loading' | 'failed'
    error : null;
}

export interface UserType {
    email: string, password: string, username?: string, birth?: string, gender?: string, token?: any, roles?: any
}

export interface JoinType{
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
export interface LoginInput {
    email: string, password: string
}