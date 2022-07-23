import LoginHome from "@/components/loginHome/LoginHome";
import { NextPage } from "next";

const LoginHomePage: NextPage = () => {
  return (
    <>
      <LoginHome /> 
    </>

  )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const book = await axios.get('http://data4library.kr/api/loanItemSrch?authKey=5a8cce5bfe03a4458af71f7db9bf5f805bede2aec4d26911ff35fd076aab2941&startDt=2022-07-10&endDt=2022-07-12&format=json')
//   const getBookData = JSON.stringify(book.data)

//   // console.log(`api 성공 ${getBookData}`)
//   console.log(typeof(getBookData))
    
//     return{ 
//       props: {
//         data: getBookData.length,
//       }
//     }
// }

export default LoginHomePage