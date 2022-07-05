/** @type {import('next').NextConfig} */
const DATALIBRARY_API_KEY = process.env.NEXT_PUBLIC_DATALIBRARY_API_KEY
const KAKAOMAP_API_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY

const nextConfig = {
  reactStrictMode: true,
  async rewrites(){
    return [
      {
        source: "/api/book",
        destination: `http://data4library.kr/api/loanItemSrch?authKey=${DATALIBRARY_API_KEY}&startDt=2022-06-01&endDt=2022-06-25&age=30`,
      },
    ]
  }
}
module.exports = nextConfig
