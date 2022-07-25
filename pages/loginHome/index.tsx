import LoginHome from "@/components/loginHome/LoginHome";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";



interface Props{
  book: string
}


const LoginHomePage: NextPage<Props> = ({docs}: any) => {
  
  // console.log("JSON.stringify= "+JSON.stringify(docs))
  // console.log(">>>>>>"+typeof(docs))
  // console.log(">>>>>>"+JSON.stringify(docs))
  return (
    <>
      <LoginHome /> 
      {/* <ul>{docs.map((book: any) => 
      <li key={book.doc.isbn13}>{JSON.stringify(book.doc.isbn13)}</li>
      )}
      </ul> */}
    </>

  )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const book = await axios.get('http://data4library.kr/api/loanItemSrch?authKey=5a8cce5bfe03a4458af71f7db9bf5f805bede2aec4d26911ff35fd076aab2941&startDt=2022-07-10&endDt=2022-07-12&format=json')
//   .then((res) => res.data)
  
//     // console.log( ">>>>>>>>>>>>>"+JSON.stringify(book))

//     return{ 
//       props: {
//         docs: [{
//           doc: {
//             ranking: book,
//             bookname: book,
//             authors: book,
//             isbn13: book,
//             bookImageURL: book,
//           }
//         }]
//     }
// }
// }

export default LoginHomePage