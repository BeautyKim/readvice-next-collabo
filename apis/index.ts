import axios from "axios";

export const server = axios.create({
    // 포스트맨테스트
    // baseURL: "https://9b5a4153-784d-4960-9f16-43b409bcec80.mock.pstmn.io"
    baseURL: 'http://127.0.0.1:8000'
})
