import { SEO } from "@/components";
import { NextPage } from "next";
import tw from "tailwind-styled-components";

export function Introduce() {
    return (
        <>
        <section className="text-gray-600 body-font">
                <SEO title="팀소개"/>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col w-full mb-20 text-center">
                    <h1
                        className="mb-4 text-2xl font-medium tracking-widest text-gray-900 title-font">TEAM READVICE</h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">도서검색, 인공지능 등 프로젝트 설명</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Box>
                        <Item>
                            <TeamImg
                                alt="team"
                                style={{width: "200px", height: "200px"}}
                                src="https://avatars.githubusercontent.com/u/89237300?v=4"/>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="text-lg font-medium text-gray-900 title-font">Ah-Reum Kim</h2>
                                <h3 className="mb-3 text-gray-500">Front-end Developer</h3>
                                <p className="mb-4">화면 담당<br/>사용기술: <br/>이메일: </p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        깃허브 로고
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        블로그 링크
                                    </a>
                                </span>
                            </div>
                        </Item>
                    </Box>
                    <Box>
                        <Item>
                            <TeamImg
                                alt="team"
                                style={{width: "200px", height: "200px"}}
                                src="https://tumblbug-pci.imgix.net/3f4ea23c994f094e550351f65e4e3632b85cb39f/075481dc585b3a0d2808a1e46736e2818099c570/a5cc85663c49a03a533c7fb1d54091fb59ddb545/ef3e6bd7-11cd-4bdc-8705-44923a70f7f7.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=59fb2da14bbcae7ee4bdd71e50c02db4'"/>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="text-lg font-medium text-gray-900 title-font">Hong-ju Noh</h2>
                                <h3 className="mb-3 text-gray-500">AI Developer</h3>
                                <p className="mb-4">매의 눈 담당<br/>사용기술: <br/>이메일: </p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        깃허브 로고
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        블로그 링크
                                    </a>
                                </span>
                            </div>
                        </Item>
                    </Box>
                    <Box>
                        <Item>
                            <TeamImg
                                alt="team"
                                style={{width: "200px", height: "200px"}}
                                src="http://image.yes24.com/goods/61814929/XL"/>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="text-lg font-medium text-gray-900 title-font">Min-seo Choi</h2>
                                <h3 className="mb-3 text-gray-500">AI Developer</h3>
                                <p className="mb-4">요정 담당<br/>사용기술: <br/>이메일: </p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        깃허브 로고
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        블로그 링크
                                    </a>
                                </span>
                            </div>
                        </Item>
                    </Box>
                    <Box>
                        <Item>
                            <TeamImg
                                alt="team"
                                style={{width: "200px", height: "200px"}}
                                src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/3Wc7/image/8I3EoghFfj4qdOGebG_43qI2cxE.jpg"/>
                            <div className="flex-grow sm:pl-8 ">
                                <h2 className="text-lg font-medium text-gray-900 title-font">Jin-hee Ha</h2>
                                <h3 className="mb-3 text-gray-500">AI Developer</h3>
                                <p className="mb-4">기둥 담당<br/>사용기술: <br/>이메일: </p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        깃허브 로고
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        블로그 링크
                                    </a>
                                </span>
                            </div>
                        </Item>
                    </Box>
                    
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Introduce

const Box = tw.div`
    p-4
    lg:w-1/2
`
const Item = tw.div`
    flex
    flex-col
    items-center 
    justify-center 
    h-full 
    text-center 
    sm:flex-row 
    sm:justify-start 
    sm:text-left
`
const TeamImg = tw.img`
    flex-shrink-0 
    object-cover 
    object-center 
    w-48 
    h-48 
    mb-4 
    rounded-lg 
    sm:mb-0
`